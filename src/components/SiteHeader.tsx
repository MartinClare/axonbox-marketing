import Link from "next/link";
import { APP_NAME, DEMO_URL } from "@/lib/brand";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/icon-192.png"
            alt=""
            className="h-9 w-9 rounded-lg object-cover ring-2 ring-[var(--axon-signal)]/70"
          />
          <span className="text-lg font-semibold tracking-wide">{APP_NAME}</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#problem" className="transition hover:text-white">
            Problem
          </a>
          <a href="#how" className="transition hover:text-white">
            How it works
          </a>
          <a href="#product" className="transition hover:text-white">
            Product
          </a>
        </nav>
        <a
          href={DEMO_URL}
          className="rounded-lg bg-[var(--axon-accent)] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110"
        >
          Try demo
        </a>
      </div>
    </header>
  );
}
