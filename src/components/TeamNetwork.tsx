import { teamNetwork } from "@/content/site";

/**
 * Sits directly under the founder card, on the same 260px / 1fr grid, so
 * it reads as the second half of "The team" rather than a new section.
 *
 * Deliberately names nobody. It describes the network around the founder;
 * individuals appear on the site only once their role has been agreed.
 */
export function TeamNetwork() {
  return (
    <div className="network">
      <div>
        <h3 className="eyebrow network__label">{teamNetwork.label}</h3>
        <ul className="network__principles">
          {teamNetwork.principles.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>

      <div className="network__body">
        {teamNetwork.body.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </div>
    </div>
  );
}
