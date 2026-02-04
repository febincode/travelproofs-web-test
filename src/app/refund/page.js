export const metadata = {
  title: "Refund Policy | TravelProofs",
  description:
    "Understand the TravelProofs.com refund policy for visa document preparation services.",
};

const refundSections = [
  {
    heading: "1. Eligibility for Refunds",
    body: [
      "Refunds are available only if no document has been generated or downloaded after purchase. Once a document is created, exported, or shared, the service is considered delivered and becomes non-refundable.",
      "If technical issues on our platform prevent you from generating a document, we will work with you to resolve the issue or provide a refund when appropriate.",
    ],
  },
  {
    heading: "2. How to Request a Refund",
    body: [
      "Submit your request by emailing support@travelproofs.com within seven (7) days of purchase. Include your account email, order reference, and a brief explanation of the issue encountered.",
      "Our support team will acknowledge your request within one business day and may ask for additional details to help us assess your case.",
    ],
  },
  {
    heading: "3. Evaluation Process",
    body: [
      "We review refund requests based on system logs, document activity, and the circumstances described. We prioritize transparency and fairness in every evaluation.",
      "If we identify a platform defect or outage that prevented successful use of the service, we will approve a refund or offer account credit at your discretion.",
    ],
  },
  {
    heading: "4. Refund Timeline",
    body: [
      "Approved refunds are processed to your original payment method within five (5) to seven (7) business days.",
      "Depending on your financial institution, it may take additional time for the refunded amount to appear on your statement.",
    ],
  },
  {
    heading: "5. Subscription Cancellations",
    body: [
      "You may cancel your subscription at any time. Access to premium features remains available until the end of the current billing period.",
      "Cancelling a subscription does not automatically trigger a refund. Eligibility will be evaluated according to the criteria above.",
    ],
  },
  {
    heading: "6. Contact Us",
    body: [
      "For refund-related queries or to follow up on an existing request, contact support@travelproofs.com.",
      "Our billing operations team is available Monday through Friday, 9:00 AM to 6:00 PM Central Time.",
    ],
  },
];

export default function RefundPage() {
  return (
    <section className="custom-mx space-y-10 py-24">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
          Refund Policy
        </span>
        <h1 className="text-4xl font-semibold text-slate-900">
          TravelProofs.com Refund Policy
        </h1>
        <p className="text-base text-slate-600">Last updated: November 2025</p>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          Thank you for using TravelProofs.com. We aim to ensure satisfaction with
          our services. Please review our refund terms below.
        </p>
      </div>

      <div className="space-y-8">
        {refundSections.map((section) => (
          <article
            key={section.heading}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-7 text-slate-600">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

