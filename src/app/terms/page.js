export const metadata = {
  title: "Terms & Conditions | TravelProofs",
  description:
    "Read the Terms of Service for using the TravelProofs - Travel Planner app and website.",
};

const sections = [
  {
    heading: "1. Use of the App",
    paragraphs: [
      "TravelProofs - Travel Planner is provided by TravelProofs Ltd for your personal, non-commercial use.",
      "You agree to use the App and Website only for lawful purposes and in line with these terms.",
    ],
  },
  {
    heading: "2. Eligibility",
    paragraphs: [
      "You must be old enough to enter into a contract in your country (at least 16 years in most places).",
      "By using the App, you confirm that the information you provide is accurate and that you have the right to use it.",
    ],
  },
  {
    heading: "3. Accounts and Security",
    paragraphs: [
      "If you create an account or log in with a third-party service, you are responsible for keeping your login details safe.",
      "You are responsible for all activity that happens under your account.",
    ],
  },
  {
    heading: "4. No In-App Purchases or Subscriptions",
    paragraphs: [
      "The current version of the App does not offer in-app purchases, paid subscriptions, or other paid features.",
      "If this changes in the future, we will clearly explain the price, terms, and refund rules before you pay.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    paragraphs: [
      "All text, design, and other materials in the App and Website (excluding your own content) belong to TravelProofs Ltd or our licensors.",
      "You do not gain any ownership rights by using the App or Website.",
    ],
  },
  {
    heading: "6. User Content",
    paragraphs: [
      "If you share content or information through the App, you are responsible for making sure it is lawful and does not infringe the rights of others.",
      "We may remove content or restrict access if we reasonably believe it breaks the law or these terms.",
    ],
  },
  {
    heading: "7. Third-Party Services",
    paragraphs: [
      "The App and Website may use third-party services (for example, sign-in, analytics, or maps). Their own terms and privacy policies apply in addition to these terms.",
    ],
  },
  {
    heading: "8. Disclaimer",
    paragraphs: [
      "The App and Website are provided \"as is\" and \"as available\". We do not promise that they will always be error-free or uninterrupted.",
    ],
  },
  {
    heading: "9. Limitation of Liability",
    paragraphs: [
      "To the extent allowed by law, we are not liable for indirect or consequential losses, or for loss of data or profits, arising from your use of the App or Website.",
    ],
  },
  {
    heading: "10. Changes and Contact",
    paragraphs: [
      "We may update these terms from time to time. We will post the latest version in the App or on the Website.",
      "If you have questions, contact TravelProofs Ltd at info@travelproofs.com.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="custom-mx py-16">
      <header className="max-w-3xl space-y-3">
        <p className="text-sm font-medium text-slate-600">Terms of Service</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          TravelProofs - Travel Planner
        </h1>
        <p className="text-sm text-slate-600">Last updated: March 17, 2026</p>
        <p className="text-base leading-7 text-slate-700">
          These terms explain how you may use the TravelProofs - Travel Planner
          app and website.
        </p>
        <div className="space-y-1 text-sm leading-6 text-slate-700">
          <p className="font-medium text-slate-900">Company details</p>
          <p>TravelProofs Ltd</p>
          <p>
            Suite10 Capital House, 61 Amhurst Road, London, United Kingdom, E8
            1LL
          </p>
          <p>
            Email:{" "}
            <a className="underline" href="mailto:info@travelproofs.com">
              info@travelproofs.com
            </a>
          </p>
        </div>
      </header>

      <div className="mt-10 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
        {sections.map((section) => (
          <section key={section.heading} className="py-6">
            <h2 className="text-base font-semibold text-slate-900">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

