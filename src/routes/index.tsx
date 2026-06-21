import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { CTAButton, CALENDLY_URL } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { CountDown } from "@/components/CountDown";
import { usePastHero } from "@/hooks/use-past-hero";
const LOGO_SRC = "/vizionbox-logo.png";
const GOOGLE_PARTNER_SRC = "/google-partner.png";
const GOOGLE_ADS_CERT_SRC = "/google-ads-cert.png";
const GOOGLE_ADS_SEARCH_SRC = "/google-ads-search.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VizionBox · More Inbound Calls From Google. Guaranteed." },
      {
        name: "description",
        content:
          "Google Ads management for home service businesses in the US. Live in 3-5 business days. If we don't make you money in 30 days, month 2 is free.",
      },
      { property: "og:title", content: "VizionBox · Google Ads for Home Service Businesses" },
      {
        property: "og:description",
        content:
          "Complete Google Ads systems built, launched, and optimized for home service businesses. One business per city. Results guaranteed.",
      },
    ],
  }),
  component: Index,
});

const LOGO_URL = LOGO_SRC;

/* Spring used on whileTap so touch users feel the lift desktop users get on hover. */
const TAP = { scale: 0.98 } as const;

function Index() {
  const pastHero = usePastHero();
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header pastHero={pastHero} />
      <main>
        <Hero />
        <ProofBar />
        <Certifications />
        <HowItWorks />
        <WhatYouGet />
        <HandsOff />
        <Industries />
        <Results />
        <Testimonials />
        <Guarantee />
        <Exclusivity />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA visible={pastHero} />
    </div>
  );
}

/* ---------------- Header ---------------- */

const NAV_LINKS = [
  { href: "#how", label: "How It Works" },
  { href: "#what", label: "What You Get" },
  { href: "#industries", label: "Industries" },
  { href: "#results", label: "Results" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#guarantee", label: "Guarantee" },
  { href: "#faq", label: "FAQ" },
];

function Logo({ height = 56 }: { height?: number }) {
  return (
    <a href="#top" className="flex items-center" aria-label="VizionBox home">
      <img
        src={LOGO_URL}
        alt="VizionBox"
        style={{ height }}
        className="w-auto object-contain"
      />
    </a>
  );
}

function Header({ pastHero }: { pastHero: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-[9px] sm:px-8 sm:py-[10px]">
        <Logo height={112} />

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CTAButton size="sm" className="hidden sm:inline-flex">
            Book Audit
          </CTAButton>
          {!pastHero && (
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white"
            >
              Book Audit
            </a>
          )}
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 lg:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 grid-bg" />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,111,124,0.45), transparent 70%)",
        }}
      />
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-20 -left-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl orb"
      />
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute -top-10 right-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl orb"
      />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-5xl px-5 text-center sm:px-8"
      >
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand sm:text-sm">
            Google Ads for Home Services
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-[72px]">
            We Get Home Service Businesses More Qualified Inbound Calls in 30 Days{" "}
            <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
              — Or Month 2 is FREE.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We build and manage complete Google Ads systems for home service businesses.
            You're live in <span className="font-semibold text-foreground">3-5 business days</span>.
            If we don't make you money in 30 days,{" "}
            <span className="font-semibold text-foreground">month 2 is on us</span>.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <CTAButton size="lg">Book Your Free Audit</CTAButton>
            <CTAButton size="lg" variant="secondary" href="#how">
              See How It Works
            </CTAButton>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}

/* ---------------- Proof Bar ---------------- */

const PROOF_ITEMS = [
  "847 Leads Generated This Month",
  "$34 Average Cost Per Lead",
  "4.8x Average Return on Ad Spend",
  "127 Home Service Businesses Served",
  "3-5 Days Average Time to Launch",
];

function ProofBar() {
  const loop = [...PROOF_ITEMS, ...PROOF_ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y border-white/10"
      style={{ background: "#006F7C" }}
    >
      <div className="marquee-track flex items-center gap-12 py-4">
        {loop.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12">
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white sm:text-base">
              {item}
            </span>
            <span className="text-white/50">★</span>
          </div>
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16"
        style={{ background: "linear-gradient(to right, #006F7C, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16"
        style={{ background: "linear-gradient(to left, #006F7C, transparent)" }}
      />
    </div>
  );
}

/* ---------------- Certifications ---------------- */

const CERTS = [
  { src: GOOGLE_PARTNER_SRC, label: "Google Partner" },
  { src: GOOGLE_ADS_SEARCH_SRC, label: "Google Ads Search Certified" },
  { src: GOOGLE_ADS_CERT_SRC, label: "Google Ads Certified" },
];

function Certifications() {
  return (
    <section className="border-b border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto grid max-w-3xl grid-cols-3 items-center justify-items-center gap-x-4 sm:gap-x-16">
          {CERTS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <img
                src={c.src}
                alt={c.label}
                className="h-20 w-auto object-contain sm:h-24"
                loading="lazy"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How It Works ---------------- */

const STEPS = [
  {
    emoji: "🔍",
    icon: Search,
    title: "Book Your Free Audit",
    body: "We get on a call, review your market, identify exactly what your competitors are doing on Google right now, and show you the specific opportunity in your city.",
  },
  {
    emoji: "🛠️",
    icon: Wrench,
    title: "We Build Everything",
    body: "Full Google Ads campaign, dedicated conversion landing page, call tracking, reporting dashboard. You fill out one form. We handle everything else.",
  },
  {
    emoji: "🚀",
    icon: Rocket,
    title: "You Go Live",
    body: "Your ads start appearing at the top of Google within 3-5 business days. The phone starts ringing.",
  },
  {
    emoji: "📈",
    icon: TrendingUp,
    title: "We Optimize Every Week",
    body: "Every Monday a performance report lands in your inbox. Every Wednesday we optimize your campaign. Every month we review results together.",
  },
];

function HowItWorks() {
  return (
    <section id="how" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            How it works
          </p>
          <h2 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            From audit to ringing phone in{" "}
            <span className="text-accent">5 days flat.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <motion.div
                whileTap={TAP}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:bg-card active:border-accent/50 active:bg-card"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/0 blur-2xl transition-all duration-500 group-hover:bg-accent/30 group-active:bg-accent/30" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="text-4xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 group-active:scale-125 group-active:rotate-6 drop-shadow-[0_4px_10px_rgba(0,111,124,0.45)]">
                      {step.emoji}
                    </div>
                    <span className="inline-block text-5xl font-black text-accent transition-all duration-500 drop-shadow-[0_0_8px_rgba(0,111,124,0.25)] group-hover:scale-[1.35] group-hover:brightness-150 group-hover:drop-shadow-[0_0_24px_rgba(0,181,199,0.95)] group-active:scale-[1.35] group-active:brightness-150 group-active:drop-shadow-[0_0_24px_rgba(0,181,199,0.95)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- What You Get ---------------- */

const FEATURED_ITEM = {
  emoji: "🎯",
  icon: Target,
  title: "Google Ads Campaign",
  body: "Full search campaign built from scratch. Right keywords, right structure, right targeting for your city and service. Built around the exact terms your customers type when they need help right now.",
};

const FEATURES = [
  {
    emoji: "🖥️",
    icon: LayoutTemplate,
    title: "Dedicated Landing Page",
    body: "A conversion focused page built specifically for your campaign. Not your homepage. A page with one purpose: turning clicks into calls.",
  },
  {
    emoji: "📞",
    icon: PhoneCall,
    title: "CallRail Call Tracking",
    body: "Every inbound call recorded, attributed, and tied back to the exact keyword and ad that generated it. Full visibility into every lead.",
  },
  {
    emoji: "📊",
    icon: BarChart3,
    title: "Live Reporting Dashboard",
    body: "Real time dashboard you can check from any device at any time. Calls, cost per lead, total spend, month over month performance.",
  },
  {
    emoji: "✉️",
    icon: Mail,
    title: "Weekly Performance Report",
    body: "Every Monday morning a performance report lands in your inbox automatically. Calls last week, cost per lead, what we optimized, what we're testing next.",
  },
  {
    emoji: "⚙️",
    icon: Settings2,
    title: "Weekly Optimization",
    body: "Every Wednesday we go into your account. Negative keywords, bid adjustments, ad testing, performance improvements. Your campaign improves every single week without you touching anything.",
  },
  {
    emoji: "📅",
    icon: CalendarCheck,
    title: "Monthly Strategy Call",
    body: "Once a month we review the previous month together, talk through what's working, and plan what's coming next.",
  },
];

function WhatYouGet() {
  return (
    <section
      id="what"
      className="relative border-t border-white/5 bg-navy-900/40 py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(0,111,124,0.30), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            What you get
          </p>
          <h2 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="block">The complete system.</span>
            <span className="mt-2 block bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
              Built, launched, optimized. By us.
            </span>
          </h2>
        </Reveal>

        {/* Featured */}
        <div className="mt-14">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              whileTap={TAP}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card to-card/40 p-8 sm:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl transition-all duration-700 group-hover:bg-accent/30 group-active:bg-accent/30" />
              <div className="relative grid gap-8 md:grid-cols-[auto_1fr] md:items-center">
                <div className="text-7xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-active:scale-110 drop-shadow-[0_8px_20px_rgba(0,111,124,0.45)]">
                  {FEATURED_ITEM.emoji}
                </div>
                <div className="text-left">
                  <span className="inline-block rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
                    The Engine
                  </span>
                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    {FEATURED_ITEM.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-muted-foreground sm:text-lg">
                    {FEATURED_ITEM.body}
                  </p>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={TAP}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-card p-7 transition-colors duration-300 hover:border-accent/50 active:border-accent/50"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-all duration-500 group-hover:bg-accent/25 group-active:bg-accent/25" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-active:scale-125 drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_6px_14px_rgba(0,111,124,0.55)] group-active:drop-shadow-[0_6px_14px_rgba(0,111,124,0.55)]">
                      {f.emoji}
                    </div>
                    <h3 className="text-[17px] font-semibold">{f.title}</h3>
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Hands Off ---------------- */

function HandsOff() {
  return (
    <section className="relative border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <motion.div
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={TAP}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative overflow-hidden rounded-[2rem] border border-accent/30 p-10 text-center transition-all duration-500 hover:border-brand/60 hover:shadow-[0_30px_80px_-20px_rgba(225,106,61,0.4)] active:border-brand/60 sm:p-14"
            style={{
              background:
                "linear-gradient(135deg, #006F7C 0%, oklch(0.24 0.04 260) 75%)",
            }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl orb" />
            <div
              className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl orb"
              style={{ animationDelay: "3s" }}
            />
            <div className="relative">
              <p className="mx-auto max-w-3xl text-balance text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
                "You don't touch anything. We handle the entire system. You just answer the
                phone and close jobs."
              </p>
              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Truly hands-off
              </p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Industries ---------------- */

/* Each photo is an individually selected, verified Pexels stock image
   that visibly shows a real worker performing the specific trade. */
const PEXELS = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`;

const INDUSTRIES = [
  { name: "HVAC", img: PEXELS(32497161) },
  { name: "Plumbing", img: PEXELS(8486975) },
  { name: "Roofing", img: PEXELS(21207685) },
  { name: "Pest Control", img: PEXELS(19789837) },
  { name: "Locksmith", img: PEXELS(4021565) },
  { name: "Water Damage Restoration", img: PEXELS(28447786) },
  { name: "Foundation Repair", img: PEXELS(35049145) },
  { name: "Mold Remediation", img: PEXELS(4097271) },
  { name: "Garage Door Repair", img: PEXELS(5691518) },
];

function Industries() {
  return (
    <section id="industries" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-96 bg-accent/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
            Industries
          </p>
          <h2 className="mt-3 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            We Specialize In Home Services.{" "}
            <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
              Every Niche, Every Market.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            We don't work with e-commerce brands or SaaS companies. Only home service
            businesses, which means we know your customers, your seasonality, and what makes
            your phone ring.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:max-w-[70rem] md:mx-auto">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 0.06}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="group relative aspect-[4/5] md:aspect-[6/5] overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-accent/60 hover:shadow-[0_20px_60px_-15px_rgba(0,111,124,0.55)] active:border-accent/60"
              >
                <img
                  src={ind.img}
                  alt={ind.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 transition-opacity duration-500 group-hover:from-background/95 group-hover:via-background/60" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 transition-all duration-500 group-hover:from-accent/25 group-hover:to-transparent group-active:from-accent/25" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-6 rounded-full bg-accent transition-all duration-500 group-hover:w-10 group-active:w-10" />
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-tight text-white sm:text-xl">
                    {ind.name}
                  </h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Don't see your niche?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand underline-offset-4 hover:underline"
            >
              Ask on your audit call
            </a>
          </p>
        </Reveal>
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
    calls: 62,
    callsLabel: "qualified calls in month one",
    cpl: { before: 91, after: 28 },
    spend: { num: "$1,200", label: "ad spend / month" },
    quote: "First month we ever had to turn away work.",
  },
  {
    emoji: "❄️",
    trade: "HVAC",
    city: "Tampa, FL",
    calls: 52,
    callsLabel: "qualified calls in 30 days",
    cpl: { before: 88, after: 31 },
    spend: { num: "3.8x", label: "return on ad spend" },
    quote: "Best ROI we've ever seen on marketing.",
  },
  {
    emoji: "🏠",
    trade: "Roofing",
    city: "Phoenix, AZ",
    calls: 47,
    callsLabel: "qualified calls in month one",
    cpl: { before: 112, after: 34 },
    spend: { num: "$1,500", label: "ad spend / month" },
    quote: "We booked out three weeks solid within the first month.",
  },
  {
    emoji: "🔒",
    trade: "Locksmith",
    city: "Chicago, IL",
    calls: 38,
    callsLabel: "qualified calls in month one",
    cpl: { before: 67, after: 22 },
    spend: { num: "$1,000", label: "ad spend / month" },
    quote: "Phone didn't stop ringing. Best investment I've made.",
  },
];

function Results() {
  return (
    <section id="results" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-1/3 h-96 bg-accent/5 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Results</p>
          <h2 className="mt-3 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            What we've done for businesses like yours.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {RESULTS.map((r, i) => (
            <Reveal key={r.trade} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                whileTap={TAP}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-card to-card/40 p-8 backdrop-blur-sm transition-colors duration-500 hover:border-accent/50 active:border-accent/50"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/30 group-active:bg-accent/30" />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, #006F7C, transparent)" }}
                />

                <div className="relative flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 text-3xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-active:scale-110">
                        {r.emoji}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{r.trade}</h3>
                        <p className="mt-0.5 flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {r.city}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand">
                      Case study
                    </span>
                  </div>

                  {/* Cost per lead — dramatic stacked before/after */}
                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      Cost per lead
                    </p>

                    <div className="mt-4 flex flex-col items-start gap-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                          Before
                        </span>
                        <span className="text-2xl font-bold leading-none text-muted-foreground/60 line-through decoration-destructive/70 decoration-2">
                          ${r.cpl.before}
                        </span>
                      </div>

                      <div className="mt-2 flex items-baseline gap-3">
                        <span className="text-base font-bold uppercase tracking-wider text-brand sm:text-lg">
                          After
                        </span>
                        <CountDown
                          from={r.cpl.before}
                          to={r.cpl.after}
                          prefix="$"
                          duration={1800}
                          className="text-[64px] font-black leading-none tracking-tight text-brand sm:text-[72px]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Standardized two stats below */}
                  <div className="mt-5 grid grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="flex h-full flex-col justify-between">
                        <div className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-2xl font-black leading-none tracking-tight text-transparent sm:text-3xl">
                          {r.calls}
                        </div>
                        <div className="mt-3 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                          {r.callsLabel}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                      <div className="flex h-full flex-col justify-between">
                        <div className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-2xl font-black leading-none tracking-tight text-transparent sm:text-3xl">
                          {r.spend.num}
                        </div>
                        <div className="mt-3 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                          {r.spend.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  {r.quote && (
                    <blockquote className="mt-8 border-l-2 border-accent pl-4 text-sm italic text-foreground/90 sm:text-base">
                      "{r.quote}"
                    </blockquote>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials (Embla) ---------------- */

const TESTIMONIALS = [
  {
    quote:
      "Before working with them I was spending $2,000 a month on Google Ads and had no idea what I was getting. Within the first month I had a dashboard showing me every single call and my cost per lead dropped by more than half.",
    name: "Mike R.",
    role: "HVAC Owner, Dallas TX",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "They built our landing page, set up tracking, and launched in under a week. Our phone went from quiet to ringing every day. First month we closed 6 new roofing jobs directly from the ads.",
    name: "Dave T.",
    role: "Roofing Contractor, Charlotte NC",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote:
      "I've worked with two other agencies before. Both overpromised and disappeared. These guys send me a report every Monday and jump on a call every month. The transparency alone is worth it.",
    name: "Chris L.",
    role: "Plumbing Business Owner, Phoenix AZ",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    quote:
      "Our cost per lead was $140 with our last agency. VizionBox got us to $38 in six weeks. I finally feel like I understand where every dollar goes.",
    name: "Sarah K.",
    role: "Electrical Services, Austin TX",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Within ten days of launch my crew was fully booked. I had to hire two more techs just to keep up. They didn't just bring leads, they brought a real pipeline.",
    name: "Tony M.",
    role: "Garage Door Repair, Denver CO",
    photo: "https://randomuser.me/api/portraits/men/68.jpg",
  },
  {
    quote:
      "I've never had a marketing company actually pick up the phone, send a Monday report, and explain numbers in plain English. These guys raised my standard for what an agency should be.",
    name: "Brandon S.",
    role: "Landscaping Owner, Atlanta GA",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, align: "start", slidesToScroll: 1 },
    [autoplay.current],
  );
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const stopAuto = () => autoplay.current?.stop();
  const resumeAuto = () => autoplay.current?.play();

  const handlePrev = () => {
    stopAuto();
    emblaApi?.scrollPrev();
    setTimeout(resumeAuto, 6000);
  };
  const handleNext = () => {
    stopAuto();
    emblaApi?.scrollNext();
    setTimeout(resumeAuto, 6000);
  };
  const handleDot = (i: number) => {
    stopAuto();
    emblaApi?.scrollTo(i);
    setTimeout(resumeAuto, 6000);
  };

  return (
    <section id="testimonials" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
                Testimonials
              </p>
              <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
                What Home Service Business Owners Say.
              </h2>
            </div>
          </Reveal>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              disabled={!canPrev}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-accent/50 hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!canNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-accent/50 hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-30"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  whileTap={TAP}
                  className="group relative flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-card to-card/40 p-8 backdrop-blur-sm transition-all duration-500 hover:border-accent/50 active:border-accent/50"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/0 blur-3xl transition-all duration-700 group-hover:bg-accent/25 group-active:bg-accent/25" />
                  <div className="relative flex flex-1 flex-col">
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" strokeWidth={0} />
                      ))}
                    </div>
                    <p className="mt-6 flex-1 text-balance text-base leading-relaxed italic text-foreground/90">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                      <img
                        src={t.photo}
                        alt={t.name}
                        loading="lazy"
                        className="h-12 w-12 rounded-full border border-white/10 object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-8 bg-accent" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Guarantee ---------------- */

function Guarantee() {
  return (
    <section id="guarantee" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <motion.div
            whileHover={{ y: -6, scale: 1.005 }}
            whileTap={TAP}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="group relative overflow-hidden rounded-[2rem] border border-accent/40 p-10 transition-all duration-500 hover:border-brand/60 hover:shadow-[0_30px_90px_-20px_rgba(225,106,61,0.45)] active:border-brand/60 sm:p-16"
            style={{
              background:
                "linear-gradient(135deg, #006F7C 0%, oklch(0.24 0.04 260) 70%)",
            }}
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/40 blur-3xl orb" />
            <div
              className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl orb"
              style={{ animationDelay: "4s" }}
            />

            <div className="relative grid items-start gap-10 md:grid-cols-[auto_1fr]">
              <div
                className="grid h-24 w-24 shrink-0 place-items-center rounded-2xl border-2 border-brand bg-background/40 backdrop-blur-sm sm:h-32 sm:w-32"
                style={{
                  boxShadow:
                    "0 0 0 4px rgba(225,106,61,0.15), 0 0 40px -5px rgba(225,106,61,0.6)",
                }}
              >
                <ShieldCheck
                  className="h-12 w-12 text-brand sm:h-16 sm:w-16"
                  strokeWidth={1.8}
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
                  The guarantee
                </p>
                <h2 className="mt-3 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
                  We don't get paid{" "}
                  <span style={{ color: "#B8F5FF" }}>unless you do.</span>
                </h2>
                <p className="mt-6 text-balance text-base leading-relaxed text-white/90 sm:text-lg">
                  If your campaign isn't generating a positive return on ad spend within the
                  first 30 days, meaning you are making less from closed jobs than you are
                  spending on ads,{" "}
                  <span className="font-semibold text-white underline decoration-white/60 underline-offset-4">
                    month 2 is completely free
                  </span>
                  .
                </p>
              </div>
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={TAP}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="group relative mx-auto mt-6 overflow-hidden rounded-xl border border-white/10 px-6 py-5 text-center backdrop-blur-sm sm:px-8 sm:py-6"
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(0,111,124,0.12) 0%, rgba(0,111,124,0.06) 50%, rgba(0,111,124,0.12) 100%)",
            }}
          >
            <div
              className="animated-gradient absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-active:opacity-100"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, rgba(225,106,61,0.35), rgba(0,111,124,0.35), rgba(225,106,61,0.35))",
              }}
            />
            <p className="text-balance text-lg font-semibold leading-snug text-foreground/90 sm:text-xl">
              <span className="block">
                No long-term contracts.{" "}
                <span className="text-accent">No lock-in.</span>
              </span>
              <span className="mt-1 block text-base font-normal text-muted-foreground sm:text-lg">
                We earn your business every single month.
              </span>
            </p>
            <div className="mt-5">
              <CTAButton size="sm" className="!px-6 !py-3 !text-base">Hold Us Accountable</CTAButton>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Exclusivity ---------------- */

function Exclusivity() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-[oklch(0.18_0.035_260)] py-28 sm:py-40">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <div
            className="inline-flex items-center gap-2.5 rounded-full border-2 border-destructive/60 bg-destructive/15 px-6 py-3 text-sm font-bold uppercase tracking-wider text-destructive shadow-[0_0_30px_-5px_rgba(220,38,38,0.5)] sm:text-base"
            style={{ color: "#ef4444" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-destructive" style={{ background: "#ef4444" }} />
            Limited availability
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-8 text-balance text-5xl font-bold tracking-tight sm:text-7xl md:text-[88px]">
            We only work with{" "}
            <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
              one business
            </span>
            <br className="hidden sm:block" /> per city.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-3xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            We don't work with two plumbers in Austin or two roofers in Denver. We take{" "}
            <span className="font-semibold text-accent">
              one business per service category per city
            </span>
            , and we go all in on winning that market for them. Once your area is taken we
            can't work with a competitor in the same space.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12">
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
    a: "That's the most common thing we hear. Almost every failed Google Ads experience comes down to the same three problems: no dedicated landing page, no call tracking, and keywords set so broad the budget gets eaten by irrelevant clicks. We've seen it hundreds of times. That's exactly what our audit uncovers and exactly what we fix.",
  },
  {
    q: "How is VizionBox different from other agencies?",
    a: "We work exclusively with home service businesses. We don't run ads for e-commerce stores, law firms, or restaurants. We know your keywords, your margins, your customers, and what it takes to win in a local market. That focus is why our results are what they are.",
  },
  {
    q: "What budget do I need?",
    a: "There's no fixed number, it depends on your market, your competition, and how aggressively you want to grow. We'll walk through exact numbers specific to your city and niche on your audit call. As a general sense, most of the home service businesses we work with land in a similar range for their monthly ad spend, paid directly to Google. Our management fee is a flat monthly rate we'll cover in detail on the call.",
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
    <section id="faq" className="relative border-t border-white/5 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">FAQ</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  className={`overflow-hidden rounded-2xl border bg-card/50 backdrop-blur-sm transition-all duration-300 ${
                    isOpen ? "border-accent/50 bg-card" : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold sm:text-lg">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 transition-all duration-300">
                      {isOpen ? (
                        <Minus className="h-4 w-4 text-accent" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      id="book"
      ref={ref}
      className="relative overflow-hidden border-t border-white/5 py-28 sm:py-36"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className="absolute inset-0 grid-bg" />
      </motion.div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(0,111,124,0.50), transparent 70%)",
        }}
      />
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl orb"
      />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Your competitors are buying the top spots on Google{" "}
            <span className="bg-gradient-to-br from-accent to-[#00B5C7] bg-clip-text text-transparent">
              right now.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Every day without a properly built campaign is another day those calls go to someone
            else. Book your free audit and we'll show you exactly what your market looks like and
            what it would take to win it.
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
        <div>
          <img src={LOGO_URL} alt="VizionBox" className="h-[112px] w-auto object-contain" />
          <p className="mt-4 text-sm text-muted-foreground">
            Google Ads Management for Home Service Businesses
          </p>
          <div className="mt-4 flex flex-col gap-1 text-sm">
            <a
              href="mailto:mustafa@thevizionbox.com"
              className="text-foreground transition-colors hover:text-accent"
            >
              mustafa@thevizionbox.com
            </a>
            <a
              href="mailto:paniz@thevizionbox.com"
              className="text-foreground transition-colors hover:text-accent"
            >
              paniz@thevizionbox.com
            </a>
            <a
              href="https://thevizionbox.com"
              className="text-muted-foreground transition-colors hover:text-accent"
            >
              thevizionbox.com
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} VizionBox. All rights reserved.</span>
          <Link to="/privacy" className="hover:text-accent">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Mobile Sticky CTA ---------------- */

function MobileStickyCTA({ visible }: { visible: boolean }) {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/85 px-4 py-3 backdrop-blur-xl transition-all duration-500 sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-shine glow-cta flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold text-white"
      >
        Book Your Free Google Ads Audit
      </a>
    </div>
  );
}
