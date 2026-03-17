export const metadata = {
  title: "Privacy Policy | TravelProofs",
  description:
    "Learn how TravelProofs - Travel Planner collects, uses, and protects personal information.",
};

const privacySections = [
  {
    heading: "1. Information We Collect",
    body: [
      "Information you provide: name, email address, and other details you choose to share when you contact us or use the App.",
      "Technical data: device information, app version, IP address, and basic usage data (for example, screens visited and errors).",
    ],
  },
  {
    heading: "2. How We Use Information",
    body: [
      "Operate and improve the App and Website.",
      "Provide support and respond to your requests.",
      "Keep the App secure and reliable.",
    ],
  },
  {
    heading: "3. Sharing Information",
    body: [
      "We may share information with trusted service providers who help us run the App (for example, hosting and analytics). They must keep your data secure and use it only for our purposes.",
      "We may share information if required by law or to protect our rights.",
      "We do not sell your personal data.",
    ],
  },
  {
    heading: "4. Data Retention and Security",
    body: [
      "We keep personal data only as long as needed for the purposes above or as required by law.",
      "We use reasonable technical and organisational measures to protect your data, but no system is completely secure.",
    ],
  },
  {
    heading: "5. Children",
    body: [
      "The App is not intended for children under 16 and we do not knowingly collect data from them. If you believe a child has provided data, please contact us and we will delete it.",
    ],
  },
  {
    heading: "6. Your Rights",
    body: [
      "You may ask to access, correct, or delete your personal data, or to limit how we use it, as allowed by law. Contact us at info@travelproofs.com to make a request.",
    ],
  },
  {
    heading: "7. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. We will post the latest version in the App or on the Website.",
    ],
  },
  {
    heading: "8. Contact",
    body: [
      "TravelProofs Ltd, Suite10 Capital House, 61 Amhurst Road, London, United Kingdom, E8 1LL",
      "Email: info@travelproofs.com",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <section className="custom-mx py-16">
      <header className="max-w-3xl space-y-3">
        <p className="text-sm font-medium text-slate-600">Privacy Policy</p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          TravelProofs - Travel Planner
        </h1>
        <p className="text-sm text-slate-600">Last updated: March 17, 2026</p>
        <p className="text-base leading-7 text-slate-700">
          This Policy describes how TravelProofs Ltd collects, uses, and protects
          personal information when you use our App and Website.
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
        {privacySections.map((section) => (
          <section key={section.heading} className="py-6">
            <h2 className="text-base font-semibold text-slate-900">
              {section.heading}
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              {section.body.map((item) => (
                <li key={item} className="pl-4">
                  <span className="-ml-4 mr-2 text-slate-400">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}

