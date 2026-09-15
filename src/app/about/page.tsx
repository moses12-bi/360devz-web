import type { Metadata } from "next";
import { Cta } from "@/components/Cta";
import { FounderCard } from "@/components/FounderCard";
import { Hero } from "@/components/Hero";
import { GraduateProgramme } from "@/components/GraduateProgramme";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Recognition } from "@/components/Recognition";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Stats } from "@/components/Stats";
import { TeamNetwork } from "@/components/TeamNetwork";
import {
  aboutPage,
  awards,
  company,
  graduateProgramme,
  partnership,
  principles,
  stats,
  teamNote,
  testimonials,
} from "@/content/site";

export const metadata: Metadata = {
  title: "About — 360 DEVZ LTD",
  description:
    "360 DEVZ LTD is a Rwandan software company registered with the Rwanda Development Board in May 2026, building operational software for African institutions.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />

      <Hero
        compact
        kicker={aboutPage.kicker}
        titleLead={aboutPage.titleLead}
        titleAccent={aboutPage.titleAccent}
        sub={aboutPage.lead}
      />

      <main>
        <Section flush tight>
          <Stats items={stats} />
        </Section>

        <Section
          eyebrow="How we operate"
          title="Four rules that decide what we take on."
        >
          <ProcessSteps items={principles} />
        </Section>

        <Section tone="alt" eyebrow={teamNote.eyebrow} title={teamNote.title} lead={teamNote.lead}>
          <FounderCard />
          <TeamNetwork />
        </Section>

        <Section
          id="graduates"
          eyebrow={graduateProgramme.eyebrow}
          title={graduateProgramme.title}
          lead={graduateProgramme.lead}
          wide
        >
          <GraduateProgramme />
        </Section>

        <Section eyebrow="Recognition" title="Standing and recommendations.">
          <Recognition awards={awards} testimonials={testimonials} />
        </Section>

        <Section eyebrow={partnership.eyebrow} title={partnership.title} wide>
          <p className="head__lead" style={{ marginTop: 26 }}>
            {partnership.body}
          </p>
        </Section>

        <Section tone="alt" eyebrow="The company" title="Registered, and accountable for it.">
          <div className="grid grid--2 grid--top stack-top">
            <article className="card">
              <h3>{company.legalName}</h3>
              <p>{company.registration}</p>
              <p>
                {company.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <p style={{ marginBottom: 0 }}>
                <a href={`mailto:${company.email}`}>{company.email}</a>
                <br />
                <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
              </p>
            </article>
            <article className="card">
              <h3>Data protection</h3>
              <p>
                We hold a Data Protection Officer certificate and operate under
                Rwanda&apos;s data protection law. Where we build or host a
                system holding personal data, the lawful basis, retention period
                and hosting region are written into the agreement before
                anything is deployed — not settled afterwards.
              </p>
              <p style={{ marginBottom: 0 }}>
                Registration details and certificates are available on request
                to clients and partners in the course of due diligence.
              </p>
            </article>
          </div>
        </Section>

        <Cta
          title="We are taking on selected client work."
          lead="We do a few things and do them properly, which is why the list is four items rather than forty. If what you need is on it, we would like to hear about it."
          secondaryHref="/services"
          secondaryLabel="See services"
        />
      </main>

      <SiteFooter />
    </>
  );
}
