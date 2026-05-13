import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
};

export default function DisplayHeading({ children, className }: Props) {
  const first = children[0] ?? "";
  const rest = children.slice(1);

  return (
    <h2 className={cn("leading-none", className)}>
      <span
        style={{ fontFamily: "var(--font-script)" }}
        className="inline text-[1.15em] text-[var(--color-accent)]"
      >
        {first}
      </span><span
        style={{ fontFamily: "var(--font-display)" }}
        className="inline text-[var(--color-accent)]"
      >
        {rest}
      </span>
    </h2>
  );
}
