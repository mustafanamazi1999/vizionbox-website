import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Search,
  Wrench,
  Rocket,
  TrendingUp,
  Target,
  LayoutTemplate,
  PhoneCall,
  BarChart3,
  Mail,
  CalendarCheck,
  Settings2,
  ShieldCheck,
  MapPin,
  Plus,
  Minus,
  Sparkles,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VizionBox — More Inbound Calls From Google. Guaranteed." },
      {
        name: "description",
        content:
          "Google Ads management for home service businesses in the US. Live in 3-5 business days. If we don't make you money in 30 days, month 2 is free.",
      },
      { property: "og:title", content: "VizionBox — Google Ads for Home Service Businesses" },
      {
        property: "og:description",
        content:
          "Complete Google Ads systems built, launched, and optimized for home service businesses. One business per city. Results guaranteed.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatYouGet />
        <Results />
        <Guarantee />
        <Exclusivity />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-accent-foreground">
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <span className="text-base sm:text-lg">VizionBox</span>
        </a>
        <CTAButton size="sm" className="hidden sm:inline-flex">Book Audit</CTAButton>
        <a
          href="#book"
          className="sm:hidden rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground"
        >
          Book Audit
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, oklch(0.32 0.08 230 / 0.45), transparent 70%)" }} />
      <div className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl orb" />
      <div className="pointer-events-none absolute -top-10 right-0 h-80 w-80 rounded-full bg-accent/5 blur-3xl orb" style={{ animationDelay: "3s" }} />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Google Ads for US home service businesses
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-7xl md:text-[88px]">
            More Inbound Calls
            <br />
            From Google.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-accent via-accent to-[oklch(0.7_0.18_230)] bg-clip-text text-transparent">
                Guaranteed.
              </span>
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We build and manage complete Google Ads systems for home service businesses.
            You're live in <span className="font-semibold text-foreground">3-5 business days</span>.
            If we don't make you money in 30 days, <span className="font-semibold text-foreground">month 2 is free</span>.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton size="lg">Book Your Free Google Ads Audit</CTAButton>
            <p className="text-xs text-muted-foreground">No commitment. No pitch. Just a straight audit of your market.</p>
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-4 border-t border-white/5 pt-8 sm:gap-8">
            {[
              { v: "3-5", l: "days to live" },
              { v: "30-day", l: "guarantee" },
              { v: "1", l: "per city" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-bold tracking-tight sm:text-3xl">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}

/* ---------------- How It Works ---------------- */

const STEPS = [
  {
    icon: Search,
    title: "Book Your Free Audit",
    body: "We get on a call, review your market, identify exactly what your competitors are doing on Google right now, and show you the specific opportunity in your city.",
  },
  {
    icon: Wrench,
    title: "We Build Everything",
    body: "Full Google Ads campaign, dedicated conversion landing page, call tracking, reporting dashboard. You fill out one form. We handle everything else.",
  },
  {
    icon: Rocket,
    title: "You Go Live",
    body: "Your ads start appearing at the top of Google within 3-5 business days. The phone starts ringing.",
  },
  {
    icon: TrendingUp,
    title: "We Optimize Every Week",
    body: "Every Wednesday we optimize your campaign. Every Monday a performance report lands in your inbox. Every month we review results together.",
  },
];

function HowItWorks() {
  return (
    <section className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">How it works</p>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Up and running in 3-5 business days.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-card">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/20" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5">
                      <step.icon className="h-5 w-5 text-accent" strokeWidth={2} />
                    </div>
                    <span className="text-5xl font-black text-white/5 transition-colors duration-500 group-hover:text-accent/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- What You Get ---------------- */

const FEATURES = [
  { icon: Target, title: "Google Ads Campaign", body: "Full search campaign built from scratch. Right keywords, right structure, right targeting for your city and service." },
  { icon: LayoutTemplate, title: "Dedicated Landing Page", body: "A conversion focused page built specifically for your campaign. Not your homepage. A page with one purpose: turning clicks into calls." },
  { icon: PhoneCall, title: "CallRail Call Tracking", body: "Every inbound call recorded, attributed, and tied back to the exact keyword and ad that generated it. Full visibility into every lead." },
  { icon: BarChart3, title: "Live Reporting Dashboard", body: "Real time dashboard you can check from any device at any time. Calls, cost per lead, total spend, month over month performance." },
  { icon: Mail, title: "Weekly Performance Report", body: "Every Monday morning a performance report lands in your inbox automatically. Calls last week, cost per lead, what we optimized, what we're testing next." },
  { icon: CalendarCheck, title: "Monthly Strategy Call", body: "Once a month we review the previous month together, talk through what's working, and plan what's coming next." },
  { icon: Settings2, title: "Weekly Optimization", body: "Every Wednesday we go into your account. Negative keywords, bid adjustments, ad testing, performance improvements. Your campaign improves every single week without you touching anything." },
];

function WhatYouGet() {
  return (
    <section className="relative border-t border-white/5 bg-navy-900/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">What you get</p>
          <h2 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need.{" "}
            <span className="text-muted-foreground">Nothing you don't.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group relative h-full bg-card p-7 transition-all duration-300 hover:bg-card/60">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                    <f.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
          <div className="relative hidden bg-gradient-to-br from-accent/15 via-card to-card p-7 lg:block">
            <div className="flex h-full flex-col justify-between">
              <ShieldCheck className="h-8 w-8 text-accent" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">Set & forget</p>
                <p className="mt-2 text-2xl font-bold leading-tight text-balance">
                  You run your business. We run your phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Results ---------------- */

const RESULTS = [
  {
    emoji: "🔧",
    trade: "Plumbing",
    city: "Dallas, TX",
    stats: [
      { num: "62", label: "qualified calls in month one" },
      { num: "$91 → $28", label: "cost per lead" },
      { num: "$1,200", label: "ad spend / month" },
    ],
    quote: "First month we ever had to turn away work.",
  },
  {
    emoji: "❄️",
    trade: "HVAC",
    city: "Tampa, FL",
    stats: [
      { num: "52", label: "qualified calls in 30 days" },
      { num: "3.8x", label: "return on ad spend" },
      { num: "4 days", label: "campaign live within" },
    ],
  },
  {
    emoji: "💧",
    trade: "Water Damage Restoration",
    city: "Denver, CO",
    stats: [
      { num: "0 → 61", label: "calls in the first month" },
      { num: "$19", label: "cost per lead" },
      { num: "Zero", label: "prior Google Ads presence" },
    ],
  },
  {
    emoji: "🏠",
    trade: "Roofing",
    city: "Phoenix, AZ",
    stats: [
      { num: "47", label: "qualified calls in month one" },
      { num: "$112 → $34", label: "cost per lead" },
      { num: "$1,500", label: "ad spend / month" },
    ],
    quote: "We booked out three weeks solid within the first month.",
  },
  {
    emoji: "🔒",
    trade: "Locksmith",
    city: "Chicago, IL",
    stats: [
      { num: "38", label: "qualified calls in month one" },
      { num: "$67 → $22", label: "cost per lead" },
      { num: "$1,000", label: "ad spend / month" },
    ],
    quote: "Phone didn't stop ringing. Best investment I've made for the business.",
  },
];

function Results() {
  return (
    <section className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Results</p>
          <h2 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            What we've done for businesses like yours.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {RESULTS.map((r, i) => (
            <Reveal key={r.trade} delay={i * 0.06}>
              <article
                className={`group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_30px_80px_-20px_oklch(0.84_0.15_215_/_0.3)] ${
                  i === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/15" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-4xl">{r.emoji}</div>
                      <h3 className="mt-3 text-xl font-bold">{r.trade}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{r.city}</p>
                    </div>
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Case study
                    </span>
                  </div>

                  <div className={`mt-8 grid gap-6 ${i === 0 ? "sm:grid-cols-3" : "grid-cols-1"}`}>
                    {r.stats.map((s, idx) => (
                      <div key={idx} className={idx > 0 ? "border-t border-white/5 pt-4 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0" : ""}>
                        <div className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-4xl font-black leading-none tracking-tight text-transparent sm:text-5xl">
                          {s.num}
                        </div>
                        <div className="mt-2 text-xs leading-snug text-muted-foreground sm:text-sm">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {r.quote && (
                    <blockquote className="mt-8 border-l-2 border-accent pl-4 text-base italic text-foreground/90">
                      "{r.quote}"
                    </blockquote>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Guarantee ---------------- */

function Guarantee() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/30 p-10 sm:p-16" style={{ background: "linear-gradient(135deg, oklch(0.84 0.15 215 / 0.18), oklch(0.22 0.04 260) 60%)" }}>
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl orb" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl orb" style={{ animationDelay: "4s" }} />

            <div className="relative grid items-center gap-10 md:grid-cols-[auto_1fr]">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border border-accent/40 bg-background/50 backdrop-blur-sm sm:h-32 sm:w-32">
                <ShieldCheck className="h-12 w-12 text-accent sm:h-16 sm:w-16" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">The guarantee</p>
                <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                  Zero risk. Guaranteed.
                </h2>
                <p className="mt-5 text-balance text-base leading-relaxed text-foreground/90 sm:text-lg">
                  If your campaign isn't generating a positive return on ad spend within the first 30 days — meaning you are making more from closed jobs than you are spending on ads — <span className="font-semibold text-accent">month 2 is completely free</span>. No asterisks. No conditions. No fine print. We only win when you win first.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Exclusivity ---------------- */

function Exclusivity() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[oklch(0.13_0.03_260)] py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[oklch(0.78_0.18_25)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[oklch(0.78_0.18_25)]" />
            Limited availability
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
            We only work with{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-br from-accent to-[oklch(0.65_0.2_230)] bg-clip-text text-transparent">
                one business
              </span>
            </span>
            <br className="hidden sm:block" /> per city.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-3xl text-balance text-lg leading-relaxed text-muted-foreground">
            We don't work with two plumbers in Austin or two roofers in Denver. We take{" "}
            <span className="font-semibold text-foreground">one business per service category per city</span> — and we go all in on winning that market for them. Once your area is taken we can't work with a competitor in the same space.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-10 flex max-w-md items-center gap-3 rounded-2xl border border-accent/30 bg-accent/5 px-5 py-4 text-left">
            <MapPin className="h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-foreground">
              If you're reading this, <span className="font-semibold">your market is still open</span>. We can't hold it indefinitely.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10">
            <CTAButton size="lg">Book Your Free Audit Before Your Market Is Taken</CTAButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "We tried Google Ads before and it didn't work.",
    a: "That's the most common thing we hear. Almost every failed Google Ads experience comes down to the same three problems — no dedicated landing page, no call tracking, and keywords set so broad the budget gets eaten by irrelevant clicks. We've seen it hundreds of times. That's exactly what our audit uncovers and exactly what we fix.",
  },
  {
    q: "How is VizionBox different from other agencies?",
    a: "We work exclusively with home service businesses. We don't run ads for e-commerce stores, law firms, or restaurants. We know your keywords, your margins, your customers, and what it takes to win in a local market. That focus is why our results are what they are.",
  },
  {
    q: "What budget do I need?",
    a: "Minimum $1,000 per month in ad spend paid directly to Google — that's what our guarantee requires. We recommend $1,000 to $3,000 per month depending on your market and competition. Our management fee is $1,500 per month flat. Ad spend goes directly to Google — we never touch that money.",
  },
  {
    q: "How long until I see results?",
    a: "Your campaign goes live within 3-5 business days of signing. Most clients start receiving calls in the first week. The campaign gets stronger every week as we build data and optimize what's working.",
  },
  {
    q: "Is there a long term contract?",
    a: "No. Month to month. Cancel anytime with 30 days written notice. We earn your business every single month.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">FAQ</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className={`overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-300 ${isOpen ? "border-accent/40 bg-card" : "border-white/10 hover:border-white/20"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold sm:text-lg">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300">
                      {isOpen ? <Minus className="h-4 w-4 text-accent" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section id="book" className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36">
      <div className="absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px]" style={{ background: "radial-gradient(ellipse 60% 70% at 50% 100%, oklch(0.32 0.1 220 / 0.5), transparent 70%)" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl orb" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Your competitors are buying the top spots on Google{" "}
            <span className="bg-gradient-to-br from-accent to-[oklch(0.65_0.2_230)] bg-clip-text text-transparent">right now.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Every day without a properly built campaign is another day those calls go to someone else. Book your free audit and we'll show you exactly what your market looks like and what it would take to win it.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <CTAButton size="lg">Book Your Free Google Ads Audit</CTAButton>
            <p className="max-w-md text-sm text-muted-foreground">
              No commitment. No pitch. Just a straight audit of your market and your opportunity.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy-900/40 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="flex items-center gap-2 font-bold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-accent-foreground">
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-lg">VizionBox</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Google Ads Management for Home Service Businesses
            </p>
            <div className="mt-4 flex flex-col gap-1 text-sm">
              <a href="mailto:mustafa@thevizionbox.com" className="text-foreground transition-colors hover:text-accent">
                mustafa@thevizionbox.com
              </a>
              <a href="https://thevizionbox.com" className="text-muted-foreground transition-colors hover:text-accent">
                thevizionbox.com
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              One business per category per city.
            </p>
            <p className="mt-1 text-sm font-semibold text-accent">Results guaranteed.</p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} VizionBox. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Mobile Sticky CTA ---------------- */

function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/85 px-4 py-3 backdrop-blur-xl sm:hidden">
      <a
        href="#book"
        className="cta-shine glow-cta flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-accent-foreground"
      >
        Book Your Free Google Ads Audit
      </a>
    </div>
  );
}
