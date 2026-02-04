export const metadata = {
  title: "About | TravelProofs",
  description:
    "Learn how TravelProofs streamlines visa document preparation for travelers, consultants, and agencies.",
};

export default function AboutPage() {
  return (
    <section className="custom-mx space-y-8 py-24">
      <div className="space-y-4">
        <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600">
          About TravelProofs
        </span>
        <h1 className="text-4xl font-semibold text-slate-900">
          Document preparation built for global travel
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">
          TravelProofs.com is a professional SaaS platform designed to simplify
          the preparation of visa-related documents. We help individuals, travel
          consultants, and agencies create accurate, personalized cover letters
          and supporting documents required for visa submissions.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Built for travelers and agencies
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Whether you manage high-volume visa operations or plan a single trip,
            TravelProofs gives you guided prompts, compliant templates, and secure
            storage so every document meets consular standards.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            Faster, smarter, compliant
          </h2>
          <p className="text-base leading-7 text-slate-600">
            Our goal is to make the documentation process faster and more secure
            through automation, smart defaults, and ongoing template updates. We
            operate as a software service provider—never as an issuing authority.
          </p>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Transparent and trustworthy
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          TravelProofs operates legally as a software service provider. We do not
          issue visas, guarantee approvals, or provide government services. Our
          platform offers document templates and smart tools that help users
          prepare their applications efficiently and accurately. The final visa
          decision always rests with the relevant consulate or embassy.
        </p>
      </div>
    </section>
  );
}

