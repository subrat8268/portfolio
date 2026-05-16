import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function DisplayHeading({ children, className }: Props) {
  const isString = typeof children === "string";
  const text = isString ? children : undefined;
  const content = isString
    ? String(children)
        .split(" ")
        .map((word, wi) => (
          <span key={wi} className="inline-block mr-[0.2em]">
            {word.split("").map((char, ci) => (
              <span key={ci} className="inline-block">
                {char}
              </span>
            ))}
          </span>
        ))
    : children;
  
  return (
    <h2 
      className={cn("leading-none", className)}
      aria-label={text}
    >
      <span
        style={{ fontFamily: "var(--font-script)" }}
        className="inline text-[1.15em] text-[var(--color-accent)]"
        aria-hidden="true"
      >
        {content}
      </span>
    </h2>
  );
}
