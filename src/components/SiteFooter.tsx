import {
  APP_NAME,
  COMPANY_NAME,
  CONTACT_EMAIL,
  CONTACT_WHATSAPP,
  CONTACT_WHATSAPP_URL,
  DEMO_URL,
} from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--axon-line)] bg-[var(--axon-ink)] text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex items-start gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/icon-192.png" alt="" className="h-8 w-8 rounded-lg object-cover" />
          <div>
            <div className="font-semibold">{APP_NAME}</div>
            <div className="mt-0.5 text-xs text-white/50">{COMPANY_NAME}</div>
            <div className="mt-3 space-y-1 text-sm text-white/70">
              <div>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
                  {CONTACT_EMAIL}
                </a>
              </div>
              <div>
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp {CONTACT_WHATSAPP}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/70">
          <a href={DEMO_URL} className="hover:text-white">
            Live demo
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
            Email
          </a>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
