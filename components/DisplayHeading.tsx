import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function DisplayHeading({ children, className }: Props) {
  return (
    <h2 className={cn("leading-none", className)}>
      <span
        style={{ fontFamily: "var(--font-script)" }}
        className="inline text-[1.15em] text-[var(--color-accent)]"
      >
        <span aria-hidden="true">{String(children).charAt(0)}</span>
        <span className="sr-only">{String(children)[0]}... (display heading)</span>
      </span>
      <span
        style={{ fontFamily: "var(--font-display)" }}
        className="inline text-[var(--color-accent)]"
      >
        {String(children).slice(1)}
      </span>
    </h2>
  );
}
