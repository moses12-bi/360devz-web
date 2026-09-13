import type { NumberedPoint } from "@/content/site";

export interface ProcessStepsProps {
  items: readonly NumberedPoint[];
}

/** Numbered rows: 01 / title / body, separated by hairlines. */
export function ProcessSteps({ items }: ProcessStepsProps) {
  return (
    <ol className="steps">
      {items.map((item, i) => (
        <li key={item.title}>
          <span className="steps__n" aria-hidden="true">
            {String(i + 1).padStart(2, "0")} /
          </span>
          <h3 className="steps__title">{item.title}</h3>
          <p className="steps__body">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
