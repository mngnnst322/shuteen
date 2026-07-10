"use client";

import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import { Placeholder } from "./components/Placeholder";
import { useContent } from "./lib/providers";
import { partners } from "./lib/site";

export default function Home() {
  const t = useContent();
  const { company, services, stats, projects, news, home } = t;

  return (
    <>
      <HeroSlider />

      {/* Статистик */}
      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-black text-brand-600 sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Үйлчилгээ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900">{home.servicesTitle}</h2>
            <p className="mt-3 text-slate-600">{home.servicesSubtitle}</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">
                  {s.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="font-semibold text-brand-600 hover:text-brand-700">
              {home.servicesCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Бидний тухай */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Placeholder label={home.aboutTitle} className="aspect-video w-full" />
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900">{home.aboutTitle}</h2>
            <p className="mt-4 leading-7 text-slate-600">{company.intro}</p>
            <ul className="mt-6 space-y-3">
              {home.aboutBullets.map((text) => (
                <li key={text} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-600 text-xs text-white">
                    ✓
                  </span>
                  {text}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="mt-8 inline-block rounded-full bg-brand-600 px-7 py-3 font-semibold text-white hover:bg-brand-700"
            >
              {home.aboutCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Хийсэн ажлууд */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-slate-900">{home.projectsTitle}</h2>
              <p className="mt-3 text-slate-600">{home.projectsSubtitle}</p>
            </div>
            <Link href="/projects" className="hidden font-semibold text-brand-600 hover:text-brand-700 sm:block">
              {t.ui.viewAll}
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <div key={p.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <Placeholder label={p.title} className="aspect-[4/3] w-full rounded-none" />
                <div className="p-5">
                  <span className="text-xs font-medium text-brand-600">{p.category}</span>
                  <h3 className="mt-1 font-display font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{p.location}, {p.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Мэдээлэл */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl font-bold text-slate-900">{home.newsTitle}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {news.map((n) => (
              <Link key={n.slug} href="/news" className="group rounded-2xl border border-slate-100 p-6 hover:border-brand-200 hover:shadow-sm">
                <time className="text-xs text-slate-400">{n.date}</time>
                <h3 className="mt-2 font-display font-semibold text-slate-900 group-hover:text-brand-700">{n.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{n.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Түншүүд */}
      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-slate-400">
            {home.partnersLabel}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <span key={p} className="font-display text-xl font-bold text-slate-400">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-700 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">{home.ctaTitle}</h2>
            <p className="mt-2 text-brand-100">{home.ctaSubtitle}</p>
          </div>
          <a
            href={`tel:${company.phones[0].replace(/\s/g, "")}`}
            className="shrink-0 rounded-full bg-white px-8 py-3 font-semibold text-brand-700 hover:bg-brand-50"
          >
            ☎ {company.phones[0]}
          </a>
        </div>
      </section>
    </>
  );
}
