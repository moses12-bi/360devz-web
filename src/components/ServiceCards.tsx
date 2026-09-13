import type { ServiceSummary } from "@/content/site";

export interface ServiceCardsProps {
  items: readonly ServiceSummary[];
}

/**
 * Numbered service columns, rule-divided. Three across by default; four
 * items fall into a 2x2 so the copy does not get squeezed into a gutter.
 */
export function ServiceCards({ items }: ServiceCardsProps) {
  const className = items.length === 4 ? "services services--4" : "services";

  return (
    <div className={className}>
      {items.map((s) => (
        <article className="service" key={s.title}>
          <p className="service__n" aria-hidden="true">
            {s.n} /
          </p>
          <h3 className="service__title">{s.title}</h3>
          <p className="service__lead">{s.lead}</p>
          <ul className="ticks">
            {s.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="service__basis">{s.basis}</p>
        </article>
      ))}
    </div>
  );
}
