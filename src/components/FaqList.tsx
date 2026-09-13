import type { Faq } from "@/content/site";

export interface FaqListProps {
  items: readonly Faq[];
}

/**
 * Native <details> disclosure — keyboard accessible, works without
 * JavaScript, and the answers are still in the page for search engines.
 */
export function FaqList({ items }: FaqListProps) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details className="faq__item" key={item.q}>
          <summary>
            <span>{item.q}</span>
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
