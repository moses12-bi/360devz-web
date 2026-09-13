import type { Award, Testimonial } from "@/content/site";

export interface RecognitionProps {
  awards: readonly Award[];
  testimonials: readonly Testimonial[];
}

/**
 * BeCode's two-column awards-and-recommendations block. The left column
 * is credentials rather than awards — the same visual job, done with
 * facts that are checkable.
 */
export function Recognition({ awards, testimonials }: RecognitionProps) {
  return (
    <div className="split">
      <div>
        <h3 className="eyebrow" style={{ marginBottom: 22 }}>
          Standing
        </h3>
        <div className="awards">
          {awards.map((a) => (
            <div className="award" key={a.title}>
              <h4 className="award__title">{a.title}</h4>
              <p className="award__meta">{a.meta}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="eyebrow" style={{ marginBottom: 22 }}>
          What clients say
        </h3>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <figure
              className={t.placeholder ? "quote quote--placeholder" : "quote"}
              key={`${t.who}-${i}`}
            >
              <blockquote className="quote__text">“{t.text}”</blockquote>
              <figcaption className="quote__who">
                <b>{t.who}</b> — {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
