import { cn } from "@/lib/utils";

type DisplayHeadingProps = {
  children: string;
  className?: string;
};

export default function DisplayHeading({
  children,
  className,
}: DisplayHeadingProps) {
  const [first = "", ...rest] = children;
  const remaining = rest.join("");

  return (
    <h2 className={cn("leading-[0.95] tracking-tight", className)}>
      <span className="inline-block align-baseline [font-family:var(--font-script)] text-[color:var(--color-accent)]">
        <span className="text-[1.15em]">{first}</span>
      </span>
      <span className="[font-family:var(--font-display)] text-[color:var(--color-accent)]">
        {remaining}
      </span>
    </h2>
  );
}
