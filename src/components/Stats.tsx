import type { Stat } from "@/content/site";

export interface StatsProps {
  items: readonly Stat[];
}

/** The counter row. Four figures across, hairline-divided. */
export function Stats({ items }: StatsProps) {
  return (
    <div className="stats">
      {items.map((s) => (
        <div className="stat" key={s.label}>
          <p className="stat__value">
            {s.value}
            {s.suffix ? <span>{s.suffix}</span> : null}
          </p>
          <p className="stat__label">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
