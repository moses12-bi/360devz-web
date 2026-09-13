/**
 * All site copy lives here, typed.
 *
 * Edit this file to change wording — you should not need to touch any
 * component to update the text on the site.
 */

/* ============================================================
   Shared
   ============================================================ */

export interface Company {
  legalName: string;
  shortName: string;
  product: string;
  email: string;
  phone: string;
  phoneHref: string;
  addressLines: readonly string[];
  registration: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export const company: Company = {
  legalName: "360 DEVZ LTD",
  shortName: "360devz",
  product: "EduCloud",
  email: "hello@360devz.com",
  phone: "+250 784 704 153",
  phoneHref: "+250784704153",
  addressLines: ["Imena, Kiyovu, Nyarugenge", "Kigali, Rwanda"],
  registration: "Registered with the Rwanda Development Board, May 2026",
};

export const nav: readonly NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/educloud", label: "EduCloud" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Hire us" },
];

/* ============================================================
   Home
   ============================================================ */

export interface NumberedPoint {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  /** Rendered in the accent colour — a unit, a plus, a suffix. */
  suffix?: string;
  label: string;
}

export interface ServiceSummary {
  n: string;
  title: string;
  lead: string;
  points: readonly string[];
  basis: string;
}

export const homeHero = {
  kicker: "360 DEVZ LTD · Kigali, Rwanda",
  titleLead: "We write software that runs",
  titleAccent: "the business.",
  sub: "Operational systems, managed hosting and security engineering for African institutions. Built in Kigali, supported by the people who wrote them.",
  primary: { label: "Submit a project", href: "/contact" },
  secondary: { label: "See what we do", href: "/services" },
  status: "Available for new projects this quarter",
} as const;

export const stats: readonly Stat[] = [
  { value: "4", label: "Service lines — software, hosting, security, graduates" },
  { value: "0", label: "Client funds we ever hold — we reconcile, a licensed rail settles" },
  { value: "100", suffix: "%", label: "Of code reviewed before it reaches a client system" },
  { value: "1", label: "Product of our own, currently in development" },
];

export const process: readonly NumberedPoint[] = [
  {
    title: "Setting goals",
    body: "We start from where money, time or visibility is leaking today — not from a feature list. You get a written scope with a number against it before anything is built.",
  },
  {
    title: "Building & testing",
    body: "Working software early and often, in reviewed increments. Every change is reviewed before it merges, and every release is tested against a staging environment that mirrors production.",
  },
  {
    title: "Deployment & care",
    body: "We deploy it, monitor it, back it up and report on it monthly. Launch is the middle of the job. Most systems fail eighteen months later, when nobody owns the server any more.",
  },
];

export const services: readonly ServiceSummary[] = [
  {
    n: "01",
    title: "Custom software development",
    lead: "Operational systems built around a problem that is costing you money, time or visibility — not a template bent to fit.",
    points: [
      "Multi-tenant web applications with real role-based access",
      "Mobile apps for low-end Android and intermittent network",
      "Mobile-money aware: payment status, reconciliation, arrears",
      "Reporting that answers what management actually asks",
    ],
    basis: "Scoped and quoted per project",
  },
  {
    n: "02",
    title: "Hosting & managed care",
    lead: "Somebody has to own the server on Monday morning. Deployment, monitoring, backups, patching, and a report each month that says what happened.",
    points: [
      "Deployment and environments, staging separate from production",
      "Uptime, domain-expiry and SSL-certificate monitoring",
      "Scheduled backups, with restores actually tested",
      "A written monthly report: uptime, backups, what changed",
    ],
    basis: "Monthly retainer",
  },
  {
    n: "03",
    title: "Security assessment",
    lead: "A passive review of what your organisation exposes to the public internet, delivered as evidence with risk ratings — not opinion.",
    points: [
      "TLS/SSL configuration, protocol support, certificate review",
      "HTTP security headers and HTTPS enforcement",
      "Email security DNS records — SPF, DKIM, DMARC",
      "Public exposure review and a prioritised remediation plan",
    ],
    basis: "Fixed scope, fixed price",
  },
  {
    n: "04",
    title: "Graduate engineering programme",
    lead: "Fresh graduates working on real client systems that are going to production — under supervision, with every change reviewed before it ships.",
    points: [
      "Structured curriculum across Spring Boot, Next.js and Flutter",
      "Production-bound tickets, not toy exercises",
      "Multi-tenant architecture, mobile money and data-protection practice",
      "Weekly demos, monthly review, and an honest reference at the end",
    ],
    basis: "By cohort · applications open",
  },
];

export const graduateProgramme = {
  eyebrow: "Graduate programme",
  title: "The gap between a computer science degree and a production system.",
  lead: "Rwanda graduates capable engineers every year who have never seen a system with real users, real money and real consequences in it. We close that gap by putting them on ours — supervised, reviewed, and paid attention to.",
  forGraduates: {
    title: "For graduates",
    points: [
      "Real, production-bound feature work reviewed before it ships",
      "The full stack we run in production: Spring Boot, Next.js, Flutter",
      "Multi-tenant SaaS architecture, mobile-money reconciliation, data protection",
      "A clear picture of how an early-stage company actually operates",
      "An honest reference based on work you actually did",
    ],
  },
  forClients: {
    title: "For clients",
    points: [
      "More hands on your project without more risk",
      "Every change reviewed by the engineering lead before merge — no exceptions",
      "Supervised work is scoped to what a reviewer can genuinely check",
      "No unreviewed change ever reaches a production system",
    ],
  },
  closing:
    "This is a real part of how we work, not corporate social responsibility. A supervised graduate multiplies what we can build — but only when the work is consistent, reviewed and secure, which is why the programme is structured rather than ad hoc.",
} as const;

/* ============================================================
   Team
   ============================================================ */

export interface Member {
  name: string;
  role: string;
  body: readonly string[];
  /** Initials shown until the photograph exists at `photo`. */
  initials: string;
  /** Path under /public. */
  photo?: string;
  /** Short facts listed beside the portrait. */
  facts?: readonly { label: string; value: string }[];
}

export const founder: Member = {
  name: "Moses Sebagabo",
  role: "Founder & Engineering Lead",
  initials: "MS",
  // Optional. FounderCard uses any image found in public/team, so this
  // only needs setting if that folder holds more than one portrait.
  photo: "/team/moses.jpg",
  body: [
    "Architecture, backend, web, mobile, deployment and security. Builds payments infrastructure professionally in Kigali — which is where the reconciliation and mobile-money work in our systems comes from.",
    "Every line that reaches a client system passes through one reviewer, and every system ships with a runbook that lets somebody else run it. Accountability you can name is worth more than a support queue you cannot.",
  ],
  facts: [
    { label: "Builds", value: "Spring Boot · Next.js · Flutter · PostgreSQL" },
    { label: "Background", value: "Payments infrastructure, Kigali" },
    { label: "Certified", value: "Data Protection Officer" },
    { label: "Based in", value: "Kigali, Rwanda" },
  ],
};

export const teamNote = {
  eyebrow: "The team",
  title: "You deal with the person who builds it.",
  lead: "No account managers, no handoff to a junior after the contract is signed, nothing outsourced. The engineer who designs your system is the one who writes it, deploys it and picks up the phone about it.",
} as const;

/* ============================================================
   Recognition & testimonials
   ============================================================ */

export interface Award {
  title: string;
  meta: string;
}

export interface Testimonial {
  text: string;
  who: string;
  role: string;
  /** Marks unfilled copy so it renders muted and is easy to spot. */
  placeholder?: boolean;
}

export const awards: readonly Award[] = [
  { title: "Registered company", meta: "Rwanda Development Board · May 2026" },
  { title: "Data Protection Officer certified", meta: "Rwanda data protection law" },
  { title: "Licensed payment-rail partnership", meta: "Centrika · approved" },
  { title: "Security assessment practice", meta: "Financial services engagement delivered, 2026" },
];

/**
 * TODO(before launch): replace these with real quotes, and only publish
 * one once you have written permission from the person quoted.
 */
export const testimonials: readonly Testimonial[] = [
  {
    text: "A client quote goes here — one or two sentences about what changed for them after the work shipped.",
    who: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    text: "The most useful quotes name a number: days saved, errors removed, a report that used to take a week.",
    who: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
  {
    text: "Keep it short. A short, specific quote is worth more than a long, generous one.",
    who: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
];

export const pullQuote = {
  text: "Code shipping is not progress. Paying customers are progress.",
  who: "360devz operating principle",
} as const;

/* ============================================================
   Case study
   ============================================================ */

export const caseStudy = {
  eyebrow: "Selected work",
  tag: "Security assessment",
  title: "External security assessment for a Rwandan financial services company",
  body: [
    "A follow-up to an initial cybersecurity review that had flagged four areas as needing technical verification: email security, security headers, vulnerability management and banking cybersecurity controls.",
    "We ran a passive, non-intrusive external assessment — SSL/TLS review, DNS email security checks, HTTP security header analysis, passive web application scanning, network reconnaissance and certificate transparency review — and delivered a written report with evidence, risk ratings, remediation steps and a prioritised plan.",
  ],
  facts: [
    { label: "Scope", value: "Passive external assessment, agreed in writing" },
    { label: "Findings", value: "No critical or high-risk issues; configuration hardening gaps confirmed" },
    { label: "Delivered", value: "Evidence-based report, risk ratings, prioritised remediation plan" },
    { label: "Boundary", value: "No exploitation, no authenticated testing, no internal access" },
  ],
  note: "The client is not named here. Engagement details are shared with prospective clients on request, with permission.",
} as const;

/* ============================================================
   Product teaser
   ============================================================ */

export const productTeaser = {
  eyebrow: "Our own product",
  title: "EduCloud",
  lead: "The same discipline pointed at our own problem. EduCloud lets a Rwandan teacher record a whole day of attendance, marks and notes by speaking for about twenty seconds in Kinyarwanda — so every parent gets a real daily account of their child's education, instead of a report card three months late.",
  status: "In development. Choosing our first partner schools now.",
  cta: "See how EduCloud works",
} as const;

/* ============================================================
   Services page
   ============================================================ */

export interface Plan {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  includes: readonly string[];
  featured?: boolean;
}

export interface Faq {
  q: string;
  a: string;
}

export const servicesPage = {
  kicker: "Services",
  titleLead: "Four things,",
  titleAccent: "done properly.",
  lead: "The list is short on purpose. Everything below is work we do ourselves — nothing here is subcontracted out and resold, and nothing is offered that we cannot stand behind afterwards.",
} as const;

/**
 * TODO(before launch): set real monthly figures.
 *
 * This is the one thing on the site nobody else can fill in for you.
 * Price each tier off your real server cost plus the hours it takes,
 * then replace "On request" — a published price removes a whole round
 * of email from every enquiry.
 */
export const plans: readonly Plan[] = [
  {
    name: "Essential",
    tagline: "For a site or small system that simply has to stay up.",
    price: "On request",
    priceNote: "per month",
    includes: [
      "Hosting on managed infrastructure",
      "Uptime monitoring with alerting",
      "Domain and SSL expiry monitoring",
      "Weekly backups, retained 30 days",
      "Security patching",
      "Email support, next business day",
    ],
  },
  {
    name: "Managed",
    tagline: "For a system a team depends on during working hours.",
    price: "On request",
    priceNote: "per month",
    featured: true,
    includes: [
      "Everything in Essential",
      "Daily backups, retained 90 days",
      "Quarterly restore test, with evidence",
      "Separate staging environment",
      "Written monthly report",
      "Priority support, same business day",
    ],
  },
  {
    name: "Assured",
    tagline: "For a system where a bad morning is a business problem.",
    price: "On request",
    priceNote: "per month",
    includes: [
      "Everything in Managed",
      "Annual passive security assessment",
      "Documented disaster-recovery procedure",
      "Log retention and access review",
      "Named incident-response contact",
      "Agreed response time, in the contract",
    ],
  },
];

export const assessment = {
  eyebrow: "Security assessment",
  title: "What a passive assessment covers — and what it does not.",
  lead: "Scope is agreed in writing before anything begins. Everything below is observable from outside your organisation, using non-intrusive methods, and nothing is exploited.",
  covered: [
    "Website availability and response behaviour",
    "HTTPS enforcement and SSL/TLS configuration",
    "TLS protocol and cipher support",
    "HTTP security headers",
    "Email security DNS records (SPF, DKIM, DMARC)",
    "Public network exposure",
    "Certificate transparency and subdomain discovery",
    "Public DNS security configuration",
  ],
  excluded: [
    "Active exploitation of any kind",
    "Authenticated or admin-portal testing",
    "API and business-logic testing",
    "Source code and database review",
    "Internal network assessment",
    "Denial-of-service or brute-force testing",
  ],
  closing:
    "You receive a written report: findings with evidence, risk ratings, practical remediation steps, items needing internal verification, and a prioritised plan. A passive assessment is a starting point — it does not replace a full penetration test, and we will tell you when you need one.",
} as const;

export const faqs: readonly Faq[] = [
  {
    q: "Who actually does the work?",
    a: "Moses Sebagabo, the founder, does the engineering. Supervised interns take on scoped work as the company grows, and every change they make is reviewed before it ships. You will be talking to the person building your system, not an account manager.",
  },
  {
    q: "Do you work with organisations outside Rwanda?",
    a: "Yes, for development and assessment work. Hosting is a different question — where your data is allowed to live may be set by your regulator, not by us, so we agree the region before anything is deployed.",
  },
  {
    q: "Who owns the code you write for us?",
    a: "You do, for work commissioned and paid for as custom development. We keep ownership of our own general-purpose libraries and tooling, and we name those in the contract rather than leaving it vague. We do not reuse one client's business logic for another.",
  },
  {
    q: "Do you handle payments or hold client funds?",
    a: "No. We build systems that record payment status, reconcile payments and report on arrears. Money settles through a licensed payment service provider — our partnership is with Centrika, and funds move on its licensed rail. We never take custody of funds.",
  },
  {
    q: "Where will our data be hosted, and who can see it?",
    a: "Agreed with you before deployment, and written into the contract. Access is least-privilege: we hold only what is needed to run and support the system, access to production is logged, and we do not copy production data onto laptops or into third-party tools without your written approval.",
  },
  {
    q: "What happens if something breaks at 6am?",
    a: "On Essential, next-business-day email support — appropriate for a site that is not business-critical, and we say so rather than implying more. On Managed and Assured you get a named contact and a response time written into the contract. We commit to what we can meet: a promise of 24/7 cover that nobody actually answers is worth less than a stated window that always holds.",
  },
  {
    q: "What happens to our system if you become unavailable?",
    a: "You are not locked in, by design. The code lives in a repository you own, or is handed to you on request. Every system ships with a written deployment runbook — how it is built, where it runs, what the environment variables are, how backups are taken and restored. Standard tools and no proprietary framework, so another engineer can pick it up. We would rather you never need any of that, but you should not have to trust us on it.",
  },
  {
    q: "Can you handle the size of our organisation?",
    a: "Tell us the numbers and we will answer honestly. The systems we build are multi-tenant and designed for thousands of records and concurrent users — that is an architecture question, not a headcount question. Where a project needs more hands than we have, we will say so before the contract rather than after, and we will not take it on the assumption that it works out.",
  },
  {
    q: "How are projects priced?",
    a: "Development is scoped and quoted per project, with a deposit at the start and the balance against agreed milestones. Assessments are fixed scope and fixed price. Hosting is a monthly retainer. We do not do unpaid customisation, and we would rather re-quote a changed scope than absorb it silently.",
  },
  {
    q: "Can you take over a system somebody else built?",
    a: "Often, yes. It starts with a paid review of what exists — the code, the server, the backups and whatever documentation there is — so we can tell you honestly whether it should be maintained, refactored or replaced. Nobody benefits from us guessing at that for free.",
  },
];

/* ============================================================
   About page
   ============================================================ */

export const aboutPage = {
  kicker: "About",
  titleLead: "A Rwandan software company that",
  titleAccent: "answers for what it ships.",
  lead: "360 DEVZ LTD was registered with the Rwanda Development Board in May 2026. It builds operational software for African institutions — starting with the problems we can see from Kigali, and can support from Kigali.",
} as const;

export const principles: readonly NumberedPoint[] = [
  {
    title: "One thing at a time",
    body: "We prove a product or a service line works, and is paying for itself, before starting the next. It is slower than announcing a catalogue, and it is the reason everything on this site is something we actually do.",
  },
  {
    title: "Paying customers are the measure",
    body: "A feature that is technically finished but untested, unreviewed or not yet trusted with real data is not done. We report status that way internally, and we report it that way to you.",
  },
  {
    title: "We never hold the money",
    body: "Systems we build record and reconcile payments; a licensed payment service provider moves them. That boundary is deliberate, and it does not move for a convenient feature.",
  },
  {
    title: "Data protection is a practice, not a page",
    body: "We hold a Data Protection Officer certificate and operate under Rwanda's data protection law. Access control, audit logging, encryption and tested backups are designed in from the start.",
  },
];

export const partnership = {
  eyebrow: "Partnership",
  title: "Payments, through a licensed rail.",
  body: "Our payment partner is Centrika, a licensed payment service provider. Systems we build reconcile against its licensed rail; funds settle through it. 360devz holds no customer money and requires no payment licence of its own. The partnership is arm's-length and on written terms.",
} as const;

/* ============================================================
   Contact page
   ============================================================ */

export const contactPage = {
  kicker: "Hire us",
  titleLead: "Submit a project",
  titleAccent: "and get a quote.",
  lead: "The most useful first message is not a feature list. It is a description of what currently goes wrong, how often, and what it costs when it does. We will tell you honestly whether we are the right people for it.",
  helpful: [
    "What the problem is, and who in your organisation feels it",
    "How it is handled today — the notebook, the spreadsheet, the WhatsApp group",
    "Roughly how many people, units, vehicles, students or transactions are involved",
    "Whether anything already exists that a new system would live alongside",
    "Any deadline that is real, and why",
  ],
  responseNote:
    "You will get a reply from the person who would do the work, usually within two business days.",
} as const;

/* ============================================================
   EduCloud product page
   ============================================================ */

export interface TeacherTask {
  label: string;
  note: string;
}

export interface Step {
  n: string;
  title: string;
  body: string;
  points: readonly string[];
}

export interface DigestRow {
  label: string;
  value: string;
  good?: boolean;
}

export const hero = {
  kicker: "A product of 360 DEVZ LTD · Kigali, Rwanda",
  titleLead: "Twenty seconds of a teacher's voice becomes",
  titleAccent: "a daily record.",
  sub: "EduCloud turns a sentence spoken in Kinyarwanda into attendance, marks and notes against the real class roster — and a message every parent can read that same afternoon.",
  status: "In development — choosing our first partner schools for pilot",
} as const;

export const problems: readonly NumberedPoint[] = [
  {
    title: "They find out at the end of term",
    body: "A report card arrives three months after the term began. By then a child who stopped attending in week three, or stopped understanding in week five, is already far behind.",
  },
  {
    title: "The school office absorbs the questions",
    body: "Parents who want to know call, or walk in. The bursar and the head teacher answer the same questions all day instead of doing their work.",
  },
  {
    title: "The portals that exist are quiet",
    body: "School software in this market ships a parent portal. Most go silent within weeks of term starting — because nothing flows into them.",
  },
];

export const teacherTasks: readonly TeacherTask[] = [
  { label: "Attendance", note: "Per class, per period — then transcribe it from paper into a system" },
  { label: "Behaviour and incidents", note: "Written in a notebook, if at all; almost never reaches a parent" },
  { label: "Marks for daily work", note: "Marked on paper, entered again later — or never entered" },
  { label: "Homework set and returned", note: "Told to the class out loud; the parent never hears it" },
  { label: "A note the parent should see", note: "The thing that actually matters, and the first thing dropped" },
];

export const spokenExample = {
  intro: "A teacher, at the end of a lesson",
  utterance: "“S2A — Keza, Mutoni na Ishimwe ntibaje. Uwase yakoze neza mu mibare.”",
  outcome:
    "Three absences recorded against the right children, and a positive note filed for a fourth — each one reaching that child's parent the same afternoon.",
} as const;

export const digest: readonly DigestRow[] = [
  { label: "Attendance", value: "Present, all periods", good: true },
  { label: "Mathematics", value: "Did well in today's exercise", good: true },
  { label: "Homework", value: "English reading, due Thursday" },
  { label: "Fees", value: "Term balance settled" },
];

export const parentPoints: readonly NumberedPoint[] = [
  {
    title: "A digest, not a firehose",
    body: "One short message a day. Parents ignore notification streams; they read a daily summary about their own child.",
  },
  {
    title: "Ask a question back",
    body: "Typed or as a voice note, in Kinyarwanda. Answers are read from real school records — never invented.",
  },
  {
    title: "Built for the phone they own",
    body: "Low-end Android and thin bandwidth, and it works when the network does not. Reachable by USSD for guardians without a smartphone.",
  },
];

export const steps: readonly Step[] = [
  {
    n: "01",
    title: "Capture",
    body: "A voice note in Kinyarwanda, or a photograph of the register the teacher already marked on paper. Nothing is typed.",
    points: [
      "Speak for about twenty seconds at the end of a lesson",
      "Or photograph the paper register you already filled in",
      "Works with no network — it syncs when the signal returns",
    ],
  },
  {
    n: "02",
    title: "Structure",
    body: "What the teacher recorded becomes records against that class's real roster — which child, which period, which mark, which note.",
    points: [
      "Matched against the actual class list, not guessed",
      "Handles Kinyarwanda names and mixed-language speech",
      "Anything ambiguous is flagged rather than assumed",
    ],
  },
  {
    n: "03",
    title: "Confirm",
    body: "One screen, one tap. The teacher corrects anything wrong before it goes anywhere. Nothing publishes unconfirmed.",
    points: [
      "The teacher is the author — the system is only the typist",
      "Corrections take seconds and improve future accuracy",
      "No record about a child is ever sent without a teacher's say-so",
    ],
  },
  {
    n: "04",
    title: "Deliver",
    body: "The afternoon digest is composed for each child, in that guardian's language, and delivered to the phone they already own.",
    points: [
      "One short message a day, not a stream of alerts",
      "Kinyarwanda by default; English or French on request",
      "Reachable by USSD for guardians without a smartphone",
    ],
  },
];

