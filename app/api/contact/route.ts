import { NextRequest, NextResponse } from "next/server";

const HUBSPOT_API_URL = "https://api.hubapi.com/crm/v3/objects/contacts";
const HUBSPOT_CONTACT_SEARCH_URL = `${HUBSPOT_API_URL}/search`;

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  problem?: string;
  message?: string;
}

interface HubSpotContactRecord {
  id: string;
}

function getContactProperties({
  name,
  email,
  company,
  problem,
  messageProperty,
}: {
  name: string;
  email: string;
  company: string;
  problem: string;
  messageProperty: string;
}) {
  return {
    firstname: name.split(" ")[0] || name,
    lastname: name.split(" ").slice(1).join(" ") || "",
    email,
    company,
    [messageProperty]: problem,
  };
}

async function parseHubSpotJson(response: Response) {
  return (await response.json().catch(() => null)) as Record<string, unknown> | null;
}

async function findExistingContactId(email: string, accessToken: string) {
  const response = await fetch(HUBSPOT_CONTACT_SEARCH_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      filterGroups: [
        {
          filters: [
            {
              propertyName: "email",
              operator: "EQ",
              value: email,
            },
          ],
        },
      ],
      limit: 1,
      properties: ["email"],
    }),
  });

  if (!response.ok) {
    return null;
  }

  const data = (await parseHubSpotJson(response)) as
    | { results?: HubSpotContactRecord[] }
    | null;

  return data?.results?.[0]?.id ?? null;
}

async function updateExistingContact(
  contactId: string,
  properties: Record<string, string>,
  accessToken: string
) {
  const response = await fetch(`${HUBSPOT_API_URL}/${contactId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ properties }),
  });

  return response;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, company } = body;
    const problem = body.problem || body.message;

    if (!name || !email || !company || !problem) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (!process.env.HUBSPOT_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: "HubSpot is not configured on the server." },
        { status: 500 }
      );
    }

    const messageProperty = process.env.HUBSPOT_MESSAGE_PROPERTY;
    if (!messageProperty) {
      return NextResponse.json(
        {
          error:
            "HubSpot message storage is not configured on the server. Set HUBSPOT_MESSAGE_PROPERTY before using the fallback contact form.",
        },
        { status: 500 }
      );
    }

    const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
    const properties = getContactProperties({
      name,
      email,
      company,
      problem,
      messageProperty,
    });
    const hubspotData = { properties };

    const hubspotResponse = await fetch(HUBSPOT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(hubspotData),
    });

    if (!hubspotResponse.ok) {
      if (hubspotResponse.status === 409) {
        const contactId = await findExistingContactId(email, accessToken);

        if (!contactId) {
          return NextResponse.json(
            {
              error:
                "Contact exists in HubSpot, but the existing record could not be updated.",
            },
            { status: 409 }
          );
        }

        const updateResponse = await updateExistingContact(
          contactId,
          properties,
          accessToken
        );

        if (!updateResponse.ok) {
          const updateError = await parseHubSpotJson(updateResponse);
          return NextResponse.json(
            {
              error: "Failed to update the existing HubSpot contact",
              details: updateError,
              status: updateResponse.status,
            },
            { status: updateResponse.status }
          );
        }

        return NextResponse.json(
          {
            success: true,
            message: "Existing HubSpot contact updated",
            note: "Your latest project details have been saved",
          },
          { status: 200 }
        );
      }

      const errorData = await parseHubSpotJson(hubspotResponse);

      return NextResponse.json(
        {
          error: "Failed to submit to HubSpot",
          details: errorData,
          status: hubspotResponse.status,
        },
        { status: hubspotResponse.status }
      );
    }

    const responseData = await hubspotResponse.json();

    return NextResponse.json(
      { success: true, data: responseData },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting to HubSpot:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
