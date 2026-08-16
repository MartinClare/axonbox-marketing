import { APP_NAME, CONTACT_EMAIL, DEMO_URL } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--axon-line)] bg-[var(--axon-ink)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/icon-192.png" alt="" className="h-8 w-8 rounded-lg object-cover" />
          <div>
            <div className="font-semibold">{APP_NAME}</div>
            <div className="text-xs text-white/50">Site Ops AI for construction</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/70">
          <a href={DEMO_URL} className="hover:text-white">
            Live demo
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
