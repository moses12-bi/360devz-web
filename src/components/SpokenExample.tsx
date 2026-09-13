import { spokenExample } from "@/content/site";

export function SpokenExample() {
  return (
    <figure className="quote-box">
      <figcaption className="quote-box__intro">{spokenExample.intro}</figcaption>
      <blockquote className="quote-box__say" lang="rw" cite="">
        {spokenExample.utterance}
      </blockquote>
      <p className="quote-box__out">→ {spokenExample.outcome}</p>
    </figure>
  );
}
