import type { Metadata } from "next";
import { ApproachTabs } from "@/components/ApproachTabs";
import { Cta } from "@/components/Cta";
import { DigestMock } from "@/components/DigestMock";
import { Hero } from "@/components/Hero";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Section } from "@/components/Section";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { SpokenExample } from "@/components/SpokenExample";
import { hero, parentPoints, problems, teacherTasks } from "@/content/site";

export const metadata: Metadata = {
  title: "EduCloud — a daily record every parent can read",
  description:
    "EduCloud lets a Rwandan teacher record a whole day of attendance, marks and notes by speaking for twenty seconds in Kinyarwanda — so every parent gets a real daily account of their child's education.",
};

export default function EduCloudPage() {
  return (
    <>
      <SiteNav />

      <Hero
        kicker={hero.kicker}
        titleLead={hero.titleLead}
        titleAccent={hero.titleAccent}
        sub={hero.sub}
        status={hero.status}
        primary={{ label: "Talk to us about a pilot", href: "/contact" }}
      />

      <main>
        <Section
          id="problem"
          flush
          eyebrow="The problem"
          title="A parent has almost no idea what happened in their child's school day."
          wide
        >
          <ProcessSteps items={problems} />
        </Section>

        <Section
          id="insight"
          tone="alt"
          eyebrow="Why this is unsolved"
          title="The portal is not the hard part. Filling it is."
          lead="What a teacher would have to do, every single day, for a parent portal to have anything in it:"
        >
          <ProcessSteps
            items={teacherTasks.map((t) => ({ title: t.label, body: t.note }))}
          />
          <p className="plans__note">
            This is unpaid administrative work on top of teaching, and teachers
            do not do it. Every parent portal in this market is downstream of
            that one fact — which is why buying more software has never fixed it.
          </p>
        </Section>

        <Section
          id="wedge"
          eyebrow="Our approach"
          title="Make the daily entry take seconds, and the portal fills itself."
        >
          <div className="grid grid--2 stack-top">
            <article className="card">
              <h3>Today — 15 to 30 minutes of typing</h3>
              <p>
                Paper first, then forms — per class, per day, after teaching has
                finished. It does not happen, and no amount of training makes it
                happen.
              </p>
            </article>
            <article className="card">
              <h3>With EduCloud — about 20 seconds, spoken</h3>
              <p>
                The teacher says it in Kinyarwanda, or photographs the register
                they already marked on paper. EduCloud structures it; the
                teacher confirms with one tap.
              </p>
            </article>
          </div>

          <SpokenExample />

          <p className="plans__note">
            Nothing is typed. Nothing new is added to a teacher&apos;s day. That
            is the whole design constraint.
          </p>
        </Section>

        <ApproachTabs />

        <Section
          id="parents"
          eyebrow="For parents"
          title="A short message, every afternoon, in the language they think in."
        >
          <div className="grid grid--2 grid--top stack-top">
            <DigestMock />
            <div>
              {parentPoints.map((point) => (
                <article className="card" key={point.title} style={{ marginBottom: 28 }}>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="plans__note">
            A behaviour note is a teacher&apos;s words, structured — never a
            model&apos;s judgement of a child. Nothing reaches a parent that a
            teacher has not confirmed.
          </p>
        </Section>

        <Section
          id="fees"
          tone="alt"
          eyebrow="Fees"
          title="We handle fees. We are not fighting for the payment rail."
        >
          <div className="grid grid--2 stack-top">
            <article className="card">
              <h3>What we do</h3>
              <p>
                A payment arrives with whatever reference a parent typed on a
                feature phone — a first name only, two siblings at once, or
                nothing at all. We match it to the right child, and the balance
                appears in that afternoon&apos;s digest.
              </p>
            </article>
            <article className="card">
              <h3>What we do not do</h3>
              <p>
                We do not hold parent money, and we do not try to replace the
                fee-collection rail your school already uses. Our own
                subscription settles through a licensed payment service
                provider.
              </p>
            </article>
          </div>
          <p className="plans__note">
            A school can adopt EduCloud without changing how it collects fees.
            We sit beside the rail, not across it.
          </p>
        </Section>

        <Section
          id="built"
          eyebrow="Built here"
          title="Built for Rwanda — not localised into it."
          lead="Dormitories with patron and matron. O-level S1–S3, A-level S4–S6, and TVET tracks. Kinyarwanda as the working language rather than a translated label. These are the structures every Rwandan school actually runs on — and the ones imported systems do not model, so schools end up bending around the software instead."
        >
          <div className="grid grid--2 stack-top">
            <article className="card">
              <h3>Built and in place</h3>
              <p>
                The multi-tenant school system: registers, classes and streams,
                dormitories, fee records and reconciliation, and the screens a
                bursar and a director use every day.
              </p>
            </article>
            <article className="card">
              <h3>In development</h3>
              <p>
                Kinyarwanda voice capture and the photographed-register path —
                the part that makes daily entry take twenty seconds. Designed
                and being built; not yet shipped to a classroom.
              </p>
            </article>
          </div>
        </Section>

        <Cta
          eyebrow="Partner schools"
          title="We are choosing our first schools now."
          lead="If you run a school and the description above sounds like your term, we would like to talk. The first schools we work with shape what EduCloud becomes — and they get it first."
          action="Talk to us"
        />
      </main>

      <SiteFooter />
    </>
  );
}
