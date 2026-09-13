import Link from "next/link";

export interface HeroAction {
  label: string;
  href: string;
}

export interface HeroProps {
  kicker: string;
  /** Headline, split so the second half can carry the accent colour. */
  titleLead: string;
  titleAccent?: string;
  sub?: string;
  status?: string;
  primary?: HeroAction;
  secondary?: HeroAction;
  /** Shorter hero for interior pages. */
  compact?: boolean;
}

/**
 * Oversized headline between two hairline rules — the BeCode signature
 * opening. Nothing else competes with the type.
 */
export function Hero({
  kicker,
  titleLead,
  titleAccent,
  sub,
  status,
  primary,
  secondary,
  compact = false,
}: HeroProps) {
  return (
    <section className={compact ? "hero hero--compact" : "hero"}>
      <div className="wrap">
        <hr className="rule rule--strong" />
        <p className="hero__kicker" style={{ marginTop: 30 }}>
          {kicker}
        </p>

        <h1 className="hero__title">
          {titleLead}
          {titleAccent ? (
            <>
              {" "}
              <em>{titleAccent}</em>
            </>
          ) : null}
        </h1>

        {sub ? <p className="hero__sub">{sub}</p> : null}

        {primary || secondary ? (
          <div className="hero__actions">
            {primary ? (
              <Link className="btn" href={primary.href}>
                {primary.label}
              </Link>
            ) : null}
            {secondary ? (
              <Link className="btn btn--ghost" href={secondary.href}>
                {secondary.label}
              </Link>
            ) : null}
          </div>
        ) : null}

        {status ? <p className="hero__status">{status}</p> : null}
      </div>
    </section>
  );
}
