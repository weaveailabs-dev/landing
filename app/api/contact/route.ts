import { NextRequest, NextResponse } from "next/server";

const HUBSPOT_API_URL = "https://api.hubapi.com/crm/v3/objects/contacts";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Prepare HubSpot contact data
    const hubspotData = {
      properties: {
        firstname: name.split(" ")[0] || name,
        lastname: name.split(" ").slice(1).join(" ") || "",
        email: email,
        company: company,
        message: message,
      },
    };

    // Send to HubSpot
    console.log("Sending to HubSpot:", {
      url: HUBSPOT_API_URL,
      tokenPrefix: process.env.HUBSPOT_ACCESS_TOKEN?.substring(0, 10),
      data: hubspotData
    });

    const hubspotResponse = await fetch(HUBSPOT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(hubspotData),
    });

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.json();
      console.error("HubSpot API error:", {
        status: hubspotResponse.status,
        statusText: hubspotResponse.statusText,
        errorData: errorData,
        token: process.env.HUBSPOT_ACCESS_TOKEN ? "Present (length: " + process.env.HUBSPOT_ACCESS_TOKEN.length + ")" : "Missing"
      });

      // If contact already exists, try to update instead
      if (hubspotResponse.status === 409) {
        return NextResponse.json(
          {
            success: true,
            message: "Contact already exists in HubSpot",
            note: "Your information has been received"
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          error: "Failed to submit to HubSpot",
          details: errorData,
          status: hubspotResponse.status
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
