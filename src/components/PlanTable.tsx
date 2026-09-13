import { company, plans } from "@/content/site";

/**
 * Hosting and managed-care tiers. What each tier *includes* is the honest
 * part and is filled in; the price is set in content/site.ts.
 */
export function PlanTable() {
  return (
    <>
      <div className="plans">
        {plans.map((plan) => (
          <article
            className={plan.featured ? "plan plan--featured" : "plan"}
            key={plan.name}
          >
            {plan.featured ? <p className="plan__flag">Most chosen</p> : null}
            <h3 className="plan__name">{plan.name}</h3>
            <p className="plan__tagline">{plan.tagline}</p>

            <p className="plan__price">
              {plan.price}
              <span>{plan.priceNote}</span>
            </p>

            <ul className="ticks">
              {plan.includes.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <a className="plan__cta" href={`mailto:${company.email}`}>
              Ask about {plan.name} →
            </a>
          </article>
        ))}
      </div>

      <p className="plans__note">
        Every tier is a written agreement with a named scope. Hosting region is
        agreed before deployment — where your data is allowed to live may be set
        by your regulator, not by us.
      </p>
    </>
  );
}
