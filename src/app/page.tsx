import Link from "next/link";
import { CaseStudy } from "@/components/CaseStudy";
import { Cta } from "@/components/Cta";
import { FounderCard } from "@/components/FounderCard";
import { GraduateProgramme } from "@/components/GraduateProgramme";
import { Hero } from "@/components/Hero";
import { Recognition } from "@/components/Recognition";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Stats } from "@/components/Stats";
import {
  awards,
  caseStudy,
  graduateProgramme,
  homeHero,
  process,
  productTeaser,
  pullQuote,
  services,
  stats,
  teamNote,
  testimonials,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      <SiteNav />

      <Hero
        kicker={homeHero.kicker}
        titleLead={homeHero.titleLead}
        titleAccent={homeHero.titleAccent}
        sub={homeHero.sub}
        primary={homeHero.primary}
        secondary={homeHero.secondary}
        status={homeHero.status}
      />

      <main>
        <Section flush tight>
          <Stats items={stats} />
        </Section>

        <Section
          eyebrow="How we work"
          title="Goals, then code, then somebody who owns it."
        >
          <div className="services">
            {process.map((p, i) => (
              <article className="service" key={p.title}>
                <p className="service__n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")} /
                </p>
                <h3 className="service__title">{p.title}</h3>
                <p className="service__lead">{p.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="services"
          tone="alt"
          eyebrow="Services"
          title="What we are hired to do."
        >
          <ServiceCards items={services} />
          <p className="stack-top">
            <Link className="link-more" href="/services">
              Scope, pricing and what each one covers →
            </Link>
          </p>
        </Section>

        <Section
          eyebrow={caseStudy.eyebrow}
          title="Work we have delivered."
          lead="Better to show the work than describe it. This is the most recent engagement we are free to publish."
        >
          <CaseStudy />
        </Section>

        <Section tone="alt" eyebrow={teamNote.eyebrow} title={teamNote.title} lead={teamNote.lead}>
          <FounderCard />
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

        <Section tone="alt" eyebrow="Recognition" title="Standing and recommendations.">
          <Recognition awards={awards} testimonials={testimonials} />
        </Section>

        <section className="section section--dark">
          <div className="wrap">
            <p className="pull">“{pullQuote.text}”</p>
            <p className="pull__who">{pullQuote.who}</p>
          </div>
        </section>

        <Section
          id="educloud"
          tone="alt"
          eyebrow={productTeaser.eyebrow}
          title={productTeaser.title}
          lead={productTeaser.lead}
        >
          <p className="stack-top">
            <Link className="link-more" href="/educloud">
              {productTeaser.cta} →
            </Link>
          </p>
        </Section>

        <Cta
          title="Submit a project and get a quote."
          lead="Tell us what currently goes wrong, how often, and what it costs when it does. If software is not the cheapest fix, we will say so — that conversation is free and usually short."
          secondaryHref="/contact"
          secondaryLabel="What to include"
        />
      </main>

      <SiteFooter />
    </>
  );
}
