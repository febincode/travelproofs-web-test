export const metadata = {
  title: "Terms & Conditions | TravelProofs",
  description:
    "Review the Terms & Conditions governing the use of TravelProofs.com and its visa document preparation services.",
};

const sections = [
  {
    heading: "1. Service Description",
    paragraphs: [
      "TravelProofs.com provides software tools that allow users to generate cover letters, itineraries, and related supporting documents for visa applications.",
      "TravelProofs.com does not offer visa approvals, appointments, or government services. The final decision to issue or refuse a visa resides exclusively with the relevant embassy or consulate.",
    ],
  },
  {
    heading: "2. Eligibility",
    paragraphs: [
      "You must be at least 18 years old and have the legal capacity to enter into these Terms to use our services.",
      "By creating an account or purchasing a subscription, you represent that the information you provide is accurate, complete, and current.",
    ],
  },
  {
    heading: "3. Use of Service",
    paragraphs: [
      "You agree to use TravelProofs.com only for lawful purposes and in compliance with all applicable laws and regulations.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity conducted through your account.",
      "You agree not to reverse engineer, modify, or interfere with the operation of the platform, nor upload content that infringes upon third-party rights.",
    ],
  },
  {
    heading: "4. Payments & Subscriptions",
    paragraphs: [
      "All payments are processed securely via Stripe. By purchasing a plan, you authorize us to charge the payment method provided for recurring subscription fees until the plan is cancelled.",
      "Subscription fees are non-transferable. Access to paid features continues until the end of the billing period in which you cancel.",
      "We may update plan pricing or features. Any changes will be communicated in advance, and continued use after the effective date constitutes acceptance.",
    ],
  },
  {
    heading: "5. Intellectual Property",
    paragraphs: [
      "All website content, templates, branding, and software tools are the property of TravelProofs.com and are protected by intellectual property laws.",
      "You may use generated documents for your internal visa application purposes only. Any unauthorized resale, redistribution, or public sharing is prohibited.",
    ],
  },
  {
    heading: "6. Confidentiality & Data Protection",
    paragraphs: [
      "We implement technical and organizational safeguards designed to protect personal and travel information. Additional details are available in our Privacy Policy.",
      "You are responsible for ensuring that any personal data you submit has been collected lawfully and that you have the necessary rights to provide it to us.",
    ],
  },
  {
    heading: "7. Limitation of Liability",
    paragraphs: [
      "TravelProofs.com provides document preparation assistance only and does not guarantee visa outcomes. To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages resulting from the use of our services.",
      "Our total liability for any claim arising from these Terms will not exceed the amount paid by you to TravelProofs.com in the twelve (12) months preceding the event giving rise to the claim.",
    ],
  },
  {
    heading: "8. Termination",
    paragraphs: [
      "We may suspend or terminate access to the platform if you violate these Terms or engage in fraudulent, abusive, or unlawful activity.",
      "You may terminate your subscription at any time through your account settings. Upon termination, you remain responsible for fees incurred before the effective termination date.",
    ],
  },
  {
    heading: "9. Modifications",
    paragraphs: [
      "We may update these Terms periodically to reflect changes in our services, operations, or applicable laws.",
      "If we make material changes, we will provide notice via email or in-app notifications. Continued use of the platform after updates take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "10. Contact",
    paragraphs: [
      "For any questions regarding these Terms, email us at support@travelproofs.com.",
      "TravelProofs.com is operated by TravelProofs Inc., a software services provider registered in the United States.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="custom-mx space-y-10 py-24">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
          Terms & Conditions
        </span>
        <h1 className="text-4xl font-semibold text-slate-900">
          TravelProofs.com Terms & Conditions
        </h1>
        <p className="text-base text-slate-600">Last updated: November 2025</p>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          Welcome to TravelProofs.com. These Terms & Conditions govern your use
          of our website and services. By accessing or using TravelProofs.com,
          you agree to comply with these terms.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <article
            key={section.heading}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

