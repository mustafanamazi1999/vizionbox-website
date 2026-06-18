import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy · VizionBox" },
      { name: "description", content: "How VizionBox collects, uses, and protects your information." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-8 sm:py-32">
        <Link to="/" className="text-sm text-brand hover:underline">
          ← Back to home
        </Link>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}
        </p>

        <div className="prose prose-invert mt-10 space-y-6 text-base leading-relaxed text-foreground/90">
          <p>
            VizionBox ("we", "our", "us") provides Google Ads management services for home
            service businesses. This page explains what information we collect, how we use
            it, and how to reach us with questions.
          </p>

          <h2 className="text-2xl font-bold">Information we collect</h2>
          <p>
            When you book an audit or contact us, we collect the information you provide
            such as your name, business name, email, phone number, website, and details
            about your marketing.
          </p>

          <h2 className="text-2xl font-bold">How we use information</h2>
          <p>
            We use this information to deliver the audit, communicate with you, and operate
            our services. We do not sell your information.
          </p>

          <h2 className="text-2xl font-bold">Contact</h2>
          <p>
            Questions about this policy or your information can be sent to either of the
            following email addresses:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <a
                href="mailto:mustafa@thevizionbox.com"
                className="text-brand hover:underline"
              >
                mustafa@thevizionbox.com
              </a>
            </li>
            <li>
              <a
                href="mailto:paniz@thevizionbox.com"
                className="text-brand hover:underline"
              >
                paniz@thevizionbox.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
