"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth, useLang } from "../lib/providers";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { lang, toggle, t } = useLang();
  const { isAdmin } = useAuth();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Хэл солих товч (render helper — компонент биш)
  const langToggle = (className = "") => (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "mn" ? "Switch to English" : "Монгол хэл рүү шилжих"}
      className={`inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 ${className}`}
    >
      <span aria-hidden>🌐</span>
      {t.ui.langLabel}
    </button>
  );

  // Баруун талын нэвтрэх / Admin товч (render helper)
  const authButton = (className = "") =>
    isAdmin ? (
      <Link
        href="/admin"
        onClick={() => setOpen(false)}
        className={`inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 ${className}`}
      >
        <span aria-hidden>🛠️</span>
        {t.ui.admin}
      </Link>
    ) : (
      <Link
        href="/login"
        onClick={() => setOpen(false)}
        className={`inline-flex items-center gap-1.5 rounded-md bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700 ${className}`}
      >
        <span aria-hidden>👤</span>
        {t.ui.login}
      </Link>
    );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      {/* Дээд эгнээ — лого голлуулсан */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6">
        {/* Зүүн тал — хэл солих */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 sm:left-6">
          {langToggle()}
        </div>

        <Link href="/" className="flex flex-col items-center" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-brand-600 font-display text-lg font-bold text-white">
            {t.company.shortName}
          </span>
          <span className="mt-2 hidden font-display text-lg font-bold text-slate-900 sm:block">
            {t.company.name}
          </span>
        </Link>

        {/* Баруун тал — нэвтрэх/Admin (desktop) + цэс товч (mobile) */}
        <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-2 sm:right-6">
          {authButton("hidden lg:inline-flex")}
          <button
            type="button"
            aria-label={t.ui.menu}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Доод эгнээ — навигаци голлуулсан */}
      <nav className="hidden border-t border-slate-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-10 py-2">
          {t.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-brand-50 text-brand-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile цэс */}
      {open && (
        <nav className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {t.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {authButton("mt-2 justify-center")}
          </div>
        </nav>
      )}
    </header>
  );
}
