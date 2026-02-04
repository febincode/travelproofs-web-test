import Link from "next/link";
import {
  ArrowRightCircle,
  CalendarClock,
  ClipboardCheck,
  FileText,
  Globe2,
  Layers,
  Mail,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    label: "Secure document handling",
  },
  {
    icon: Globe2,
    label: "82 consulates supported",
  },
  {
    icon: Users,
    label: "Trusted by visa consultants",
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Smart drafting",
    description:
      "Guided prompts and AI-assisted language keep every cover letter on-brand and compliant.",
  },
  {
    icon: Layers,
    title: "Template library",
    description:
      "Reusable blueprints for Schengen, US, UK, and more—ready to adapt to each traveler.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit-ready history",
    description:
      "Track edits, approvals, and exports to satisfy internal QA and client expectations.",
  },
];

const metrics = [
  { value: "35K+", label: "Visa packets delivered" },
  { value: "99.2%", label: "Customer satisfaction" },
];

const cardHighlights = [
  "Role-based workspaces for teams and partners",
  "Version history with export-ready audit trails",
  "GDPR-aligned storage and configurable retention",
];

const steps = [
  {
    icon: FileText,
    title: "Capture essentials",
    description: "Collect travel details, itineraries, and bookings with structured prompts.",
  },
  {
    icon: CalendarClock,
    title: "Match requirements",
    description: "Select the right consulate template and apply your agency branding instantly.",
  },
  {
    icon: ClipboardCheck,
    title: "Review quickly",
    description: "Collaborate on redlines, approve in one click, and export clean PDFs.",
  },
  {
    icon: ArrowRightCircle,
    title: "Deliver securely",
    description: "Share password-protected files with clients or download to your archive.",
  },
];

const plans = [
  {
    name: "Basic",
    price: "$9",
    cadence: "/month",
    description: "Perfect for independent travelers who need a one-time document.",
    points: ["1 cover letter credit", "Guided form experience", "Instant PDF export"],
  },
  {
    name: "Professional",
    price: "$29",
    cadence: "/month",
    description: "Built for consultants handling multiple submissions each week.",
    points: [
      "Unlimited document generation",
      "Reusable templates & branding",
      "Email support within 24h",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "For agencies requiring team workspaces, advanced controls, and SLAs.",
    points: [
      "Multi-seat workspace",
      "Audit logs & granular roles",
      "Dedicated success manager",
    ],
  },
];

const assurances = [
  {
    heading: "Security-first operations",
    copy: "Encryption in transit and at rest, SOC 2-driven roadmap, and routine penetration testing to safeguard sensitive traveler data.",
  },
  {
    heading: "Reliable infrastructure",
    copy: "Redundant hosting, automated backups, and a 99.9% uptime target keep your visa preparation workflows always available.",
  },
  {
    heading: "Specialist success team",
    copy: "Travel documentation experts respond within one business day with practical guidance for complex itineraries and consular nuances.",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-linear-to-br from-slate-50 via-white to-blue-50/60">
        <div className="custom-mx flex flex-col gap-14 py-24 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 shadow-sm">
              Trusted visa documentation SaaS
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
              Generate visa-ready document packs in minutes.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              TravelProofs helps agencies and consultants create consistent, compliant visa support
              documents with guided workflows, quality controls, and secure storage.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                Book a demo
                <ArrowRightCircle className="h-4 w-4" />
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                Explore pricing
              </Link>
            </div>
            <div className="mt-10 grid max-w-md gap-4 sm:grid-cols-2">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-sm"
                >
                  <p className="text-2xl font-semibold text-blue-700">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm"
                >
                  <item.icon className="h-4 w-4 text-blue-600" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full max-w-md space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                Platform snapshot
              </p>
              <p className="text-2xl font-semibold text-slate-900">
                End-to-end document preparation with built-in compliance checks.
              </p>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center justify-between rounded-2xl border border-blue-100 bg-blue-600/10 px-4 py-3">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-800">
                    Average turnaround
                  </p>
                  <p className="text-lg font-semibold text-blue-900">6 minutes</p>
                </div>
                <CalendarClock className="h-8 w-8 text-blue-700" />
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Active teammates
                  </p>
                  <p className="text-lg font-semibold text-slate-900">180+</p>
                </div>
                <Users className="h-8 w-8 text-slate-500" />
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              {cardHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShieldCheck className="mt-1 h-4 w-4 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="custom-mx py-20">
        <div className="max-w-xl space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Everything you need to produce clean visa packets
          </h2>
          <p className="text-base text-slate-600">
            Minimal UI, purposeful automation, and controls that prioritize compliance.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <feature.icon className="h-10 w-10 rounded-2xl bg-blue-50 p-2 text-blue-600" />
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="custom-mx py-20">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              A guided workflow from intake to delivery
            </h2>
            <p className="text-base text-slate-600">
              Four simple checkpoints keep applications on track—perfect for teams and solo consultants alike.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-blue-600/10 p-3 text-blue-600">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="custom-mx py-20"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-xl space-y-3">
          <h2
            id="pricing-heading"
            className="text-3xl font-semibold text-slate-900 sm:text-4xl"
          >
            Plans built for travelers, consultants, and agencies
          </h2>
          <p className="text-base text-slate-600">
            Start with a single document or scale across teams. Upgrade or downgrade any time.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                plan.highlight ? "border-blue-300 shadow-lg" : ""
              }`}
            >
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {plan.highlight ? "Most popular" : "Available"}
                </p>
                <h3 className="text-xl font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-600">{plan.description}</p>
              </div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-slate-900">
                  {plan.price}
                </span>
                <span className="text-sm text-slate-500">{plan.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <ShieldCheck className="mt-1 h-4 w-4 text-blue-600" />
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href="/#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-blue-600 ${
                  plan.highlight
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-slate-200 text-slate-800 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                Talk to our team
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="custom-mx grid gap-8 py-20 lg:grid-cols-3">
          {assurances.map((item) => (
            <div
              key={item.heading}
              className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.heading}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="custom-mx py-20"
        aria-labelledby="contact-heading"
      >
        <div className="grid gap-12 lg:grid-cols-[0.6fr_0.4fr]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
              Contact
            </span>
            <h2
              id="contact-heading"
              className="text-3xl font-semibold text-slate-900 sm:text-4xl"
            >
              Let’s prepare your next visa submission together
            </h2>
            <p className="text-base text-slate-600">
              Share a few details and our specialists will walk you through templates, security, and onboarding.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 font-medium text-blue-700">
                  <Mail className="h-4 w-4" />
                support@travelproofs.com
              </div>
            </div>
            <form
              action="mailto:support@travelproofs.com"
              method="post"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Alex Traveler"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="you@travelproofs.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                  placeholder="Tell us about your visa documentation needs."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-blue-200"
              >
                Send request
                <ArrowRightCircle className="h-4 w-4" />
              </button>
              <p className="text-xs text-slate-500">
                By submitting this form you agree to our Terms & Conditions and acknowledge our Privacy Policy.
              </p>
            </form>
          </div>
          <div className="space-y-5 rounded-3xl border border-blue-200 bg-blue-50/80 p-10 shadow-sm">
            <h3 className="text-lg font-semibold text-blue-900">
              Operating hours
            </h3>
            <p className="text-sm text-blue-800">
              Monday – Friday · 9:00 AM – 6:00 PM Central Time
            </p>
            <h3 className="text-lg font-semibold text-blue-900">
              Talk to us
            </h3>
            <p className="text-sm text-blue-800">
              Our support team is ready to help with onboarding, compliance questions, and template guidance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
