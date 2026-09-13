import Link from "next/link";
import { company } from "@/content/site";

export interface CtaProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  action?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

/** Centred dark closing band — "Submit a project and get a quote". */
export function Cta({
  eyebrow = "Next step",
  title,
  lead,
  action = "Submit a project",
  secondaryHref,
  secondaryLabel,
}: CtaProps) {
  return (
    <section className="cta">
      <div className="wrap">
        <p className="eyebrow" style={{ textAlign: "center" }}>
          {eyebrow}
        </p>
        <h2 className="cta__title">{title}</h2>
        {lead ? <p className="cta__lead">{lead}</p> : null}
        <div className="cta__actions">
          <a className="btn" href={`mailto:${company.email}`}>
            {action}
          </a>
          {secondaryHref && secondaryLabel ? (
            <Link className="btn btn--ghost" href={secondaryHref}>
              {secondaryLabel}
            </Link>
          ) : (
            <a className="btn btn--ghost" href={`tel:${company.phoneHref}`}>
              {company.phone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
