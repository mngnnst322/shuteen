"use client";

import { PageHeader } from "../components/PageHeader";
import { useContent, usePageTitle } from "../lib/providers";

function FactCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-6">
      <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
        <span>{icon}</span>
        {label}
      </div>
      <div className="mt-2 font-display text-lg font-bold text-slate-900">{value}</div>
    </div>
  );
}

export default function AboutPage() {
  const t = useContent();
  usePageTitle(t.nav[1].label);
  const { company, about, stats } = t;

  return (
    <>
      <PageHeader title={t.nav[1].label} subtitle={about.subtitle} />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* Танилцуулга */}
          <p className="text-lg leading-8 text-slate-700">
            <span className="font-bold text-slate-900">{company.name}</span>
            {about.lead.before}
            <span className="font-semibold text-brand-700">{about.lead.pvc}</span>
            {about.lead.after}
          </p>

          {/* Хурдан мэдээлэл — 4 карт */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {about.quickFacts.map((f) => (
              <FactCard key={f.label} {...f} />
            ))}
          </div>

          {/* Дэлгэрэнгүй түүх */}
          <div className="mt-14 space-y-5">
            <p className="text-lg leading-8 text-slate-700">
              <span className="font-bold text-slate-900">{company.name}</span>
              {about.paragraphs[0].lead}
            </p>
            <p className="leading-8 text-slate-600">{about.story2}</p>
            <p className="leading-8 text-slate-600">{about.story3}</p>
          </div>

          {/* Гол баримтууд — 4 карт */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {about.facts.map((f) => (
              <FactCard key={f.label} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Статистик */}
      <section className="bg-brand-700 py-14 text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-black sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-brand-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Томоохон хэрэгжсэн төслүүд */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wide text-slate-500">
            {about.projectsHeading}
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {about.projectNames.map((p) => (
              <span
                key={p}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
