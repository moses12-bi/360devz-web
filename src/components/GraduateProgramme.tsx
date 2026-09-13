import { graduateProgramme as gp } from "@/content/site";

/**
 * Two columns — what a graduate gets, and why a client should be
 * comfortable with a graduate on their project. The second column is the
 * one that matters commercially; leaving it out makes the programme read
 * as a risk rather than as capacity.
 */
export function GraduateProgramme() {
  return (
    <>
      <div className="grid grid--2 grid--top stack-top">
        <article className="card">
          <h3>{gp.forGraduates.title}</h3>
          <ul className="ticks">
            {gp.forGraduates.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
        <article className="card">
          <h3>{gp.forClients.title}</h3>
          <ul className="ticks">
            {gp.forClients.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      </div>
      <p className="plans__note">{gp.closing}</p>
    </>
  );
}
