export const metadata = {
  title: "Privacy Policy | TravelProofs",
  description:
    "Understand how TravelProofs.com collects, uses, and protects personal data for visa document preparation.",
};

const privacySections = [
  {
    heading: "1. Information We Collect",
    body: [
      "Personal information that you provide directly, such as name, email address, company name, and payment details.",
      "Travel data that you supply when completing document prompts, including itineraries, accommodation details, and supporting notes.",
      "Usage data automatically collected when you interact with our platform, including IP address, browser type, device identifiers, and activity logs.",
    ],
  },
  {
    heading: "2. How We Use Your Information",
    body: [
      "To operate, maintain, and improve the TravelProofs platform and services.",
      "To process payments securely through Stripe and manage subscription billing.",
      "To communicate with you regarding onboarding, product updates, security alerts, support, and marketing (where permitted).",
      "To analyze platform performance and enhance user experience through aggregated insights.",
    ],
  },
  {
    heading: "3. Data Security & Retention",
    body: [
      "We use encryption, access controls, and secure infrastructure to protect personal data in transit and at rest.",
      "Document data is retained for as long as you maintain an active account or as required to meet legal and contractual obligations. You may request deletion of specific documents at any time.",
      "Payment information is handled exclusively by trusted processors like Stripe; TravelProofs does not store full payment card details.",
    ],
  },
  {
    heading: "4. Cookies & Tracking Technologies",
    body: [
      "We use cookies and similar technologies to remember preferences, secure sessions, and understand how visitors interact with the site.",
      "You can manage cookie preferences through your browser settings. Disabling cookies may limit certain features of the platform.",
    ],
  },
  {
    heading: "5. Third-Party Services & Data Sharing",
    body: [
      "We share data with service providers who support payment processing, analytics, email delivery, and customer support—all of whom are contractually bound to protect your information.",
      "We may disclose information if required by law, legal process, or governmental request, or to protect the rights, property, or safety of TravelProofs or our users.",
      "We do not sell personal data or share it with third parties for their independent marketing purposes.",
    ],
  },
  {
    heading: "6. International Data Transfers",
    body: [
      "TravelProofs operates internationally. Where data is transferred across borders, we implement appropriate safeguards such as Standard Contractual Clauses to ensure lawful processing.",
      "You consent to the transfer of your information to the United States or other jurisdictions where our service providers operate, subject to applicable laws.",
    ],
  },
  {
    heading: "7. Your Rights & Choices",
    body: [
      "You can request access to your personal data, ask for corrections, or request deletion where legally permissible by contacting support@travelproofs.com.",
      "You may opt out of marketing communications by using the unsubscribe link in our emails or contacting us directly.",
      "If you are located in the European Economic Area or the United Kingdom, you may have additional rights under GDPR, including data portability and the right to lodge a complaint with a supervisory authority.",
    ],
  },
  {
    heading: "8. Updates to This Policy",
    body: [
      "We may update this Privacy Policy to reflect changes in our practices, services, or legal requirements. When we make material updates, we will notify you via email or in-app notice.",
      "The updated policy becomes effective once posted. Continued use of the platform indicates acceptance of the revised policy.",
    ],
  },
  {
    heading: "9. Contact",
    body: [
      "If you have questions about our Privacy Policy or data practices, contact: support@travelproofs.com.",
      "TravelProofs Inc. · 1200 TravelProofs Way · Austin, TX 73301 · United States",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="custom-mx space-y-10 py-24">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
          Privacy Policy
        </span>
        <h1 className="text-4xl font-semibold text-slate-900">
          TravelProofs.com Privacy Policy
        </h1>
        <p className="text-base text-slate-600">Last updated: November 2025</p>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          At TravelProofs.com, we value your privacy. This policy outlines how we
          collect, use, and protect your personal data.
        </p>
      </div>

      <div className="space-y-8">
        {privacySections.map((section) => (
          <article
            key={section.heading}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {section.heading}
            </h2>
            <ul className="mt-4 space-y-3 text-base leading-7 text-slate-600">
              {section.body.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

