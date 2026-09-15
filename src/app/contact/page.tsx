import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { company, contactPage, faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "Hire us — 360 DEVZ LTD",
  description:
    "Submit a project and get a quote. Talk directly to the engineers who would build it. 360 DEVZ LTD, Kigali, Rwanda.",
};

export default function ContactPage() {
  return (
    <>
      <SiteNav />

      <Hero
        compact
        kicker={contactPage.kicker}
        titleLead={contactPage.titleLead}
        titleAccent={contactPage.titleAccent}
        sub={contactPage.lead}
      />

      <main>
        <Section flush>
          <div className="grid grid--2 grid--top">
            <div>
              <h2 className="head__title" style={{ fontSize: "2rem" }}>
                How to reach us
              </h2>
              <p className="head__lead">
                Email is best — it gives us something to think about before
                replying. {contactPage.responseNote}
              </p>

              <div className="hero__actions">
                <a className="btn" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
                <a className="btn btn--ghost" href={`tel:${company.phoneHref}`}>
                  {company.phone}
                </a>
              </div>

              <p className="muted" style={{ marginTop: "2.4rem" }}>
                {company.legalName}
                <br />
                {company.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            <article className="card card--boxed">
              <h3>What makes a first message useful</h3>
              <ul className="ticks">
                {contactPage.helpful.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="muted" style={{ marginBottom: 0, fontSize: "0.9rem" }}>
                None of this has to be precise. Rough numbers and an honest
                description of the mess beat a polished specification.
              </p>
            </article>
          </div>
        </Section>

        <Section
          tone="alt"
          eyebrow="Schools"
          title="Asking about EduCloud instead?"
          lead="If you run a school, the same address reaches us — but read how EduCloud works first, so the conversation starts from whether it fits your term rather than from what it is."
        >
          <p className="stack-top">
            <Link className="link-more" href="/educloud">
              How EduCloud works →
            </Link>
          </p>
        </Section>

        <Section eyebrow="Questions" title="Asked before signing anything." wide>
          <FaqList items={faqs} />
        </Section>

        <section className="section section--dark">
          <div className="wrap">
            <div className="head">
              <p className="eyebrow">Before you write</p>
              <h2 className="head__title">One thing worth knowing.</h2>
              <p className="head__lead">
                We only take work we can stand behind for the life of the
                system. If we are not the right people for what you need, you
                will hear it in the first reply rather than in month three — and
                where we can, we will point you at someone who is.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
