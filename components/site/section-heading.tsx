import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  titleTag?: "h1" | "h2";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  titleTag = "h2",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";
  const TitleTag = titleTag;

  return (
    <div
      className={cn(
        "space-y-5",
        isCentered && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      <div
        className={cn(
          "eyebrow",
          isCentered && "mx-auto justify-center text-center"
        )}
      >
        {eyebrow}
      </div>
      <div className="space-y-4">
        <TitleTag
          className={cn(
            "section-title",
            isCentered && "mx-auto max-w-4xl text-balance"
          )}
        >
          {title}
        </TitleTag>
        <p
          className={cn(
            "section-copy",
            isCentered && "mx-auto text-balance"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
