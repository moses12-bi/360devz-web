import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { company } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy & data protection",
  description: `How ${company.legalName} handles student, guardian and teacher data in ${company.product}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />

      <Hero
        compact
        kicker="Legal"
        titleLead="Privacy &"
        titleAccent="data protection."
        sub={`How ${company.legalName} handles student, guardian and teacher information in ${company.product}.`}
      />

      <main className="section">
        <div className="wrap wrap--narrow prose">
          <p className="note">
            <b>Who we are.</b> {company.legalName}, registered with the Rwanda
            Development Board in May 2026, of{" "}
            {company.addressLines.join(", ")}. We hold a Data Protection Officer
            certificate and operate under Rwanda&apos;s data protection law.
          </p>

          <h2>The short version</h2>
          <p>
            {company.product} holds information about children. We treat that as
            the most serious responsibility in the company. In practice that
            means four commitments:
          </p>
          <ul>
            <li>We collect the least we need to do the job, and no more.</li>
            <li>
              A school&apos;s data is that school&apos;s data. It is never mixed
              with another school&apos;s, and we do not sell it or share it for
              advertising.
            </li>
            <li>
              Nothing about a child reaches a parent unless a teacher has
              confirmed it.
            </li>
            <li>We never hold or move parents&apos; money.</li>
          </ul>

          <h2>What we collect</h2>
          <ul>
            <li>
              <b>Students:</b> name, class and stream, dormitory where
              applicable, attendance, marks, teacher notes, and fee balance.
            </li>
            <li>
              <b>Guardians:</b> name, relationship to the student, phone number,
              and preferred language.
            </li>
            <li>
              <b>Teachers and school staff:</b> name, role, and the records they
              create.
            </li>
            <li>
              <b>Voice and images captured by teachers:</b> short recordings and
              photographs of registers used to create daily records.
            </li>
            <li>
              <b>Payment references:</b> the amount, timestamp and reference of a
              fee payment, so it can be matched to the right student. We do not
              receive or store card or bank credentials.
            </li>
          </ul>

          <h2>Why we hold it</h2>
          <p>
            We process this information to run the school&apos;s daily records,
            to keep guardians informed about their own child, and to match fee
            payments to the correct student. We act on behalf of the school,
            under a written agreement with that school. We do not use student or
            guardian information for advertising, and we do not sell it to
            anyone.
          </p>

          <h2>Voice recordings and photographs</h2>
          <p>
            Teachers may record a short voice note or photograph a register they
            have already filled in, so the day&apos;s records can be created
            without retyping them. Once the teacher has confirmed the resulting
            record, the original recording or photograph is deleted. We keep a
            recording beyond that point only where we have asked for and
            received explicit permission, and only to improve accuracy in
            Kinyarwanda.
          </p>

          <h2>Automated processing, and its limits</h2>
          <p>
            {company.product} uses automated language processing to turn what a
            teacher said or wrote into structured records. Two limits apply and
            are built into the product:
          </p>
          <ul>
            <li>
              <b>The teacher is the author.</b> Automated processing structures
              what a teacher recorded. It does not assess, grade, rank, score or
              form opinions about a child.
            </li>
            <li>
              <b>Nothing publishes unconfirmed.</b> No record about a student
              reaches a guardian until a teacher has reviewed and confirmed it.
            </li>
          </ul>
          <p>
            Where automated matching is used to link a fee payment to a student,
            low-confidence matches are placed in a queue for a member of school
            staff to decide, rather than applied automatically.
          </p>

          <h2>Where information is processed</h2>
          <p>
            {company.product} is hosted on cloud infrastructure. Some automated
            language processing is carried out by third-party service providers
            whose systems may be located outside Rwanda. Where that is the case,
            we transfer only the minimum information the task requires, under
            contractual terms that restrict what the provider may do with it,
            and we record what is transferred. Schools are told, in their
            agreement with us, which processors are involved.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep a school&apos;s records for as long as that school uses{" "}
            {company.product}, and for a limited period afterwards so records
            can be returned or restored if needed. When a school leaves, we
            return its data and delete our copies on request. Retention periods
            are set out in each school&apos;s agreement.
          </p>

          <h2>How we protect it</h2>
          <ul>
            <li>Each school&apos;s data is isolated from every other school&apos;s.</li>
            <li>
              Access is role-based and least-privilege — staff see only what
              their role requires.
            </li>
            <li>Access to sensitive records is logged and reviewed.</li>
            <li>
              Data is encrypted in transit and at rest, and backed up regularly.
            </li>
            <li>Administrator accounts require additional authentication.</li>
          </ul>

          <h2>Your rights</h2>
          <p>
            Guardians, students, teachers and staff may ask to see the
            information we hold about them, ask for it to be corrected, or raise
            a concern about how it is handled. Because we act on behalf of the
            school, the quickest route is usually through the school. You may
            also contact us directly and we will work with the school to
            respond.
          </p>

          <h2>Reporting a problem</h2>
          <p>
            If you believe information has been exposed, lost or mishandled,
            please tell us immediately at{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>. We would far
            rather hear about a suspected problem that turns out to be nothing
            than learn about a real one late.
          </p>

          <h2>Contact</h2>
          <p>
            {company.legalName}
            <br />
            {company.addressLines.join(", ")}
            <br />
            <a href={`mailto:${company.email}`}>{company.email}</a> ·{" "}
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
          </p>

          <p className="note" style={{ marginTop: "2.4rem" }}>
            <b>Last updated:</b> July 2026. We will update this page as{" "}
            {company.product} develops, and will tell partner schools when
            something material changes.
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
