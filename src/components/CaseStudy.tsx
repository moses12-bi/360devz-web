import { caseStudy } from "@/content/site";

/** Two-panel selected-work block: narrative left, hard facts right. */
export function CaseStudy() {
  return (
    <>
      <div className="case">
        <div className="case__body">
          <p className="case__tag">{caseStudy.tag}</p>
          <h3 className="case__title">{caseStudy.title}</h3>
          {caseStudy.body.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
        <div className="case__side">
          <ul className="case__list">
            {caseStudy.facts.map((f) => (
              <li key={f.label}>
                <b>{f.label}</b>
                {f.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="plans__note">{caseStudy.note}</p>
    </>
  );
}
