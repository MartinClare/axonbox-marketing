import {
  APP_NAME,
  CONTACT_EMAIL,
  DEMO_EMAIL,
  DEMO_PASSWORD,
  DEMO_URL,
} from "@/lib/brand";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const STEPS = [
  { title: "Capture", body: "Photo, WhatsApp, email, or voice from the work face." },
  { title: "Extract", body: "AI proposes category, severity, location, and next action." },
  { title: "Case", body: "Open a tracked issue with an owner and a due date." },
  { title: "Prove", body: "After photo closes the loop — not a verbal “already fixed.”" },
  { title: "Pack", body: "Evidence and daily/period reports stay ready to hand over." },
];

const PAINS = [
  {
    title: "Chat floods",
    body: "Issues live in WhatsApp. Instructions disappear. Nobody owns the follow-up.",
  },
  {
    title: "Photos in albums",
    body: "Camera rolls and folders cannot prove what was fixed, when, or by whom.",
  },
  {
    title: "Nightly rebuilds",
    body: "Someone rebuilds the daily report from memory, Excel, and scattered screenshots.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white text-[var(--axon-ink)]">
      <SiteHeader />

      {/* Hero — brand first, full-bleed photo (no baked-in slide text) */}
      <section className="relative min-h-dvh overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/hero-site.jpg"
          alt=""
          className="anim-fade-in absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative z-10 flex min-h-dvh flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:justify-center lg:pb-24 lg:pt-32">
          <div className="mx-auto w-full max-w-6xl">
            <p className="anim-fade-up text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--axon-signal)]">
              Site Ops AI
            </p>
            <p className="anim-fade-up mt-4 text-4xl font-semibold tracking-tight text-[var(--axon-signal)] sm:text-5xl lg:text-[3.5rem]">
              {APP_NAME}
            </p>
            <h1 className="anim-fade-up-delay mt-4 max-w-3xl text-3xl font-semibold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              One site photo starts construction admin.
            </h1>
            <p className="anim-fade-up-delay-2 mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Turn capture into a Case — assign, prove after, close, keep evidence.
            </p>
            <div className="anim-fade-up-delay-2 mt-8 flex flex-wrap items-center gap-3">
              <a
                href={DEMO_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--axon-accent)] px-6 text-sm font-semibold text-white shadow-lg shadow-black/25 transition hover:brightness-110"
              >
                Try the live demo
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("AxonBox demo")}`}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Talk to us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="scroll-mt-20 border-b border-[var(--axon-line)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-28">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--axon-accent)]">
              The problem
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Too much information. Too little control.
            </h2>
            <p className="mt-4 max-w-xl text-[var(--axon-steel)] leading-relaxed">
              Site teams already capture plenty. The cost is scatter — chat, albums, voice with no
              file, Excel forks, and a report rebuilt at night.
            </p>
            <div className="mt-10 space-y-6">
              {PAINS.map((item) => (
                <div key={item.title} className="border-l-2 border-[var(--axon-accent)] pl-4">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--axon-steel)]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/ppt-02-too-much-info.jpg"
              alt="Scattered site information"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* From chaos */}
      <section className="bg-[var(--axon-ink)] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-24">
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/ppt-04-from-chaos.jpg"
              alt="From WhatsApp chaos to structured control"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--axon-signal)]">
              The shift
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              From WhatsApp chaos to a Case you can chase.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              {APP_NAME} is a private-site supervision loop: record → assign → prove after → close.
              Not another compliance form. A file you can hand to the owner.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="scroll-mt-20 border-b border-[var(--axon-line)]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--axon-accent)]">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Capture once. Chase in Cases. Prove after.
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="relative">
                <div className="text-3xl font-semibold text-[var(--axon-accent)]/90">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--axon-steel)]">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-14 overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/ppt-06-case-journey.jpg"
              alt="Case journey from extract to evidence"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product proof */}
      <section id="product" className="scroll-mt-20 bg-[#f8fafc]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--axon-accent)]">
              Product
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built for the site day — not the weekend rebuild.
            </h2>
            <p className="mt-4 text-[var(--axon-steel)] leading-relaxed">
              Overview, Inbox, Capture, Cases, Evidence gallery, daily reports, and close-out packs
              — the trail stays in one place.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <figure className="overflow-hidden rounded-2xl border border-[var(--axon-line)] bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/fig-05-1-overview.png"
                alt="AxonBox Overview"
                className="w-full object-cover object-top"
              />
              <figcaption className="border-t border-[var(--axon-line)] px-4 py-3 text-sm text-[var(--axon-steel)]">
                Overview — open safety, overdue Cases, the day at a glance
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-[var(--axon-line)] bg-white shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/fig-08-2-detail.png"
                alt="AxonBox Case detail"
                className="w-full object-cover object-top"
              />
              <figcaption className="border-t border-[var(--axon-line)] px-4 py-3 text-sm text-[var(--axon-steel)]">
                Case detail — assign, after-proof, verify & close
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-[var(--axon-line)] bg-white shadow-sm lg:col-span-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/media/fig-11-1-evidence.png"
                alt="AxonBox Evidence gallery"
                className="w-full object-cover object-top"
              />
              <figcaption className="border-t border-[var(--axon-line)] px-4 py-3 text-sm text-[var(--axon-steel)]">
                Evidence — create or link a Case, replace, download, or delete from the photo
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Evidence commercial */}
      <section className="border-y border-[var(--axon-line)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--axon-accent)]">
              Commercial evidence
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Every photo can become a file you can defend.
            </h2>
            <p className="mt-4 text-[var(--axon-steel)] leading-relaxed">
              Keep the trail with the Case. Close with after-proof. Export packs when the owner or
              client asks — without rebuilding from chat and albums.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/media/ppt-08-evidence.jpg"
              alt="Every photo can become commercial evidence"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="bg-[var(--axon-ink)] text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--axon-signal)]">
              Live demo
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Walk the loop in minutes.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Open the production demo on Railway. Capture, open a Case, link evidence, close with
              after-proof.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={DEMO_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[var(--axon-accent)] px-6 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Open demo
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("AxonBox demo")}`}
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/25 px-6 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Talk to us
              </a>
            </div>
            <p className="mt-6 text-sm text-white/55">
              Demo login:{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-white/85">{DEMO_EMAIL}</code>
              {" / "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-white/85">{DEMO_PASSWORD}</code>
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
