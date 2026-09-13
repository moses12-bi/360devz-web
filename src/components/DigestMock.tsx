import { digest } from "@/content/site";

/** Illustrative example of the daily message a guardian receives. */
export function DigestMock() {
  return (
    <div className="digest">
      <p className="digest__top">EduCloud · Today</p>
      <p className="digest__who">Keza M. — S2A</p>
      <dl>
        {digest.map((row) => (
          <div key={row.label} style={{ display: "contents" }}>
            <dt>{row.label}</dt>
            <dd className={row.good ? "is-good" : undefined}>{row.value}</dd>
          </div>
        ))}
      </dl>
      <p className="digest__note">
        Sent in Kinyarwanda by default. English or French on request.
      </p>
    </div>
  );
}
