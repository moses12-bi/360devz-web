import type { Metadata } from "next";
import { CaseStudy } from "@/components/CaseStudy";
import { Cta } from "@/components/Cta";
import { FaqList } from "@/components/FaqList";
import { GraduateProgramme } from "@/components/GraduateProgramme";
import { Hero } from "@/components/Hero";
import { PlanTable } from "@/components/PlanTable";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import {
  assessment,
  caseStudy,
  faqs,
  graduateProgramme,
  servicesPage,
  services,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Services — software, hosting and security assessment",
  description:
    "Custom operational software, managed hosting and passive security assessment for Rwandan organisations. Scoped in writing, built and supported by the people who write it.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />

      <Hero
        compact
        kicker={servicesPage.kicker}
        titleLead={servicesPage.titleLead}
        titleAccent={servicesPage.titleAccent}
        sub={servicesPage.lead}
        primary={{ label: "Submit a project", href: "/contact" }}
      />

      <main>
        <Section flush>
          <ServiceCards items={services} />
        </Section>

        <Section
          id="hosting"
          tone="alt"
          eyebrow="Hosting & managed care"
          title="Somebody has to own the server on Monday morning."
          lead="Most systems do not fail at launch. They fail eighteen months later, when the certificate expired, the backup had been silently failing since March, and the person who set it up has moved on. These tiers exist so that does not happen to you."
        >
          <PlanTable />
        </Section>

        <Section
          id="assessment"
          eyebrow={assessment.eyebrow}
          title={assessment.title}
          lead={assessment.lead}
          wide
        >
          <div className="grid grid--2 grid--top stack-top">
            <article className="card">
              <h3>What is covered</h3>
              <ul className="ticks">
                {assessment.covered.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
            <article className="card">
              <h3>What is out of scope</h3>
              <ul className="ticks ticks--no">
                {assessment.excluded.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="plans__note">{assessment.closing}</p>
        </Section>

        <Section
          id="graduates"
          tone="alt"
          eyebrow={graduateProgramme.eyebrow}
          title={graduateProgramme.title}
          lead={graduateProgramme.lead}
          wide
        >
          <GraduateProgramme />
        </Section>

        <Section
          eyebrow={caseStudy.eyebrow}
          title="A delivered engagement."
        >
          <CaseStudy />
        </Section>

        <Section id="faq" eyebrow="Questions" title="Asked before signing anything." wide>
          <FaqList items={faqs} />
        </Section>

        <Cta
          title="A short conversation, before a proposal."
          lead="We would rather spend twenty minutes understanding the problem than send you a document that guesses at it. If we are the wrong people for the job, that is a useful outcome too."
          secondaryHref="/contact"
          secondaryLabel="What to include"
        />
      </main>

      <SiteFooter />
    </>
  );
}
