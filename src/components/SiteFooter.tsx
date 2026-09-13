import Image from "next/image";
import Link from "next/link";
import { company, nav, services } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <Link className="brand" href="/">
              <Image
                className="brand__mark"
                src="/brand/logo.png"
                alt=""
                width={88}
                height={88}
                sizes="44px"
              />
              <span className="brand__word">
                360<span>devz</span>
              </span>
            </Link>
            <p>
              Operational software, hosting and security engineering for
              African institutions. Built and supported from Kigali.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            {services.map((s) => (
              <p key={s.title}>
                <Link href="/services">{s.title}</Link>
              </p>
            ))}
          </div>

          <div>
            <h4>Company</h4>
            {nav.map((item) => (
              <p key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </p>
            ))}
            <p>
              <Link href="/privacy">Privacy</Link>
            </p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </p>
            <p>
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </p>
            <p style={{ marginTop: "1rem" }}>
              {company.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>

        <p className="legal">
          © {new Date().getFullYear()} {company.legalName}. {company.registration}.
        </p>
      </div>
    </footer>
  );
}
