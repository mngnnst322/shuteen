"use client";

import Link from "next/link";
import { useContent } from "../lib/providers";

export default function Footer() {
  const t = useContent();
  const { company, nav, services, footer } = t;

  return (
    <footer className="mt-auto bg-brand-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Компани */}
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt={company.name} className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">{company.intro}</p>
        </div>

        {/* Цэс */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">{footer.pages}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-slate-400 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Үйлчилгээ */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">{footer.services}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.slice(0, 5).map((s) => (
              <li key={s.title} className="text-slate-400">{s.title}</li>
            ))}
          </ul>
        </div>

        {/* Холбоо барих */}
        <div>
          <div className="flex items-center justify-between gap-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">{footer.contact}</h3>
            <div className="flex gap-2">
              <a
                href={company.social.facebook}
                aria-label="Facebook"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-brand-950"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.773-1.63 1.565v1.88h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94Z" />
                </svg>
              </a>
              <a
                href={company.social.instagram}
                aria-label="Instagram"
                className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500 hover:text-brand-950"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2c-2.72 0-3.06.012-4.123.06-1.062.05-1.79.218-2.428.465a4.9 4.9 0 0 0-1.772 1.153A4.9 4.9 0 0 0 2.525 5.45c-.247.638-.416 1.366-.465 2.428C2.012 8.94 2 9.28 2 12s.012 3.06.06 4.123c.05 1.062.218 1.79.465 2.427a4.9 4.9 0 0 0 1.153 1.772 4.9 4.9 0 0 0 1.772 1.153c.638.247 1.366.416 2.428.465C8.94 21.988 9.28 22 12 22s3.06-.012 4.123-.06c1.062-.05 1.79-.218 2.428-.465a4.9 4.9 0 0 0 1.772-1.153 4.9 4.9 0 0 0 1.153-1.772c.247-.638.416-1.366.465-2.428.048-1.062.06-1.402.06-4.122s-.012-3.06-.06-4.123c-.05-1.062-.218-1.79-.465-2.428a4.9 4.9 0 0 0-1.153-1.772A4.9 4.9 0 0 0 18.55 2.525c-.638-.247-1.366-.416-2.428-.465C15.06 2.012 14.72 2 12 2Zm0 1.802c2.67 0 2.987.01 4.042.058.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.858.048 1.055.058 1.372.058 4.042s-.01 2.987-.058 4.042c-.045.976-.207 1.505-.344 1.858-.182.467-.399.8-.748 1.15-.35.35-.683.566-1.15.748-.353.137-.882.3-1.858.344-1.054.048-1.372.058-4.042.058s-2.987-.01-4.042-.058c-.976-.045-1.505-.207-1.858-.344a3.1 3.1 0 0 1-1.15-.748 3.1 3.1 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.858-.048-1.055-.058-1.372-.058-4.042s.01-2.987.058-4.042c.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.858-.344 1.055-.048 1.372-.058 4.042-.058Zm0 3.063a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
                </svg>
              </a>
            </div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>📍 {company.address}</li>
            {company.phones.map((p, i) => (
              <li key={i}>
                ☎ <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-white">{p}</a>
              </li>
            ))}
            <li>✉ <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
            <li>🕐 {company.workHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-5 text-center text-xs text-slate-500">
          © {company.foundedYear}–2026 {company.name}. {footer.rights}
        </div>
      </div>
    </footer>
  );
}
