"use client";

import Link from "next/link";
import { PageHeader } from "../components/PageHeader";
import { useContent, usePageTitle } from "../lib/providers";

export default function ServicesPage() {
  const t = useContent();
  usePageTitle(t.nav[4].label);
  const { services, servicesPage } = t;

  return (
    <>
      <PageHeader title={t.home.servicesTitle} subtitle={servicesPage.subtitle} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-brand-50 text-3xl">
                  {s.icon}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{s.description}</p>
                <Link href="/contact" className="mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700">
                  {servicesPage.cardCta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900">{servicesPage.ctaTitle}</h2>
          <p className="mt-3 text-slate-600">{servicesPage.ctaSubtitle}</p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-brand-600 px-8 py-3 font-semibold text-white hover:bg-brand-700"
          >
            {servicesPage.ctaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
