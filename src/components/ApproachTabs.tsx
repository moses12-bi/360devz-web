"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { steps } from "@/content/site";

/**
 * Full-bleed dark section: the four capture steps as a vertical tab list
 * with a detail panel. Keyboard-navigable per the WAI-ARIA tabs pattern.
 */
export function ApproachTabs() {
  const [active, setActive] = useState<number>(0);
  const baseId = useId();
  const step = steps[active]!;

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    const last = steps.length - 1;
    let next: number | null = null;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = active === last ? 0 : active + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = active === 0 ? last : active - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  }

  return (
    <section id="how" className="section section--dark">
      <div className="wrap">
        <p className="eyebrow">How it works</p>
        <h2 className="head__title">From a lesson ending to a parent knowing.</h2>

        <div className="approach__grid">
          <div
            className="approach__tabs"
            role="tablist"
            aria-label="How EduCloud works"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
          >
            {steps.map((s, i) => (
              <button
                key={s.n}
                id={`${baseId}-tab-${i}`}
                className="approach__tab"
                role="tab"
                type="button"
                aria-selected={i === active}
                aria-controls={`${baseId}-panel-${i}`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
              >
                <span className="approach__tab-n">{s.n}</span>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          <div
            className="approach__panel"
            id={`${baseId}-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${active}`}
            tabIndex={0}
          >
            <h3>{step.title}</h3>
            <p>{step.body}</p>
            <ul className="approach__points">
              {step.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <p className="approach__foot">
          Capture works offline and syncs when the network returns. Rwandan
          school connectivity is a design input, not an excuse.
        </p>
      </div>
    </section>
  );
}
