import type { ReactNode } from "react";

export type SectionTone = "default" | "alt" | "dark";

export interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  tone?: SectionTone;
  /** No top hairline — for a section that follows the hero. */
  flush?: boolean;
  /** Less vertical padding. */
  tight?: boolean;
  /** Let the headline run wider than the default 19ch. */
  wide?: boolean;
  children?: ReactNode;
}

/**
 * One section shell for the whole site: small tracked eyebrow, a heavy
 * rule, an oversized headline, optional lead, then content.
 */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  tone = "default",
  flush = false,
  tight = false,
  wide = false,
  children,
}: SectionProps) {
  const classes = [
    "section",
    tone === "alt" ? "section--alt" : "",
    tone === "dark" ? "section--dark" : "",
    flush ? "section--flush" : "",
    tight ? "section--tight" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes}>
      <div className="wrap">
        {eyebrow || title ? (
          <div className="head">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? (
              <h2 className={wide ? "head__title head__title--wide" : "head__title"}>
                {title}
              </h2>
            ) : null}
            {lead ? <p className="head__lead">{lead}</p> : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
