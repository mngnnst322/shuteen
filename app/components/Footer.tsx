"use client";

import Link from "next/link";
import { useContent } from "../lib/providers";

export default function Footer() {
  const t = useContent();
  const { company, nav, services, footer } = t;

  return (
    <footer className="mt-auto bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Компани */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-brand-600 font-display text-lg font-bold text-white">
              {company.shortName}
            </span>
            <span className="font-display text-lg font-bold text-white">{company.name}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-400">{company.intro}</p>
          <div className="mt-4 flex gap-3">
            <a href={company.social.facebook} className="grid h-9 w-9 place-items-center rounded-full bg-slate-800 hover:bg-brand-600">f</a>
            <a href={company.social.instagram} className="grid h-9 w-9 place-items-center rounded-full bg-slate-800 hover:bg-brand-600">ig</a>
          </div>
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
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">{footer.contact}</h3>
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
