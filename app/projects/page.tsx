"use client";

import { PageHeader } from "../components/PageHeader";
import { Placeholder } from "../components/Placeholder";
import { useContent, usePageTitle } from "../lib/providers";

export default function ProjectsPage() {
  const t = useContent();
  usePageTitle(t.nav[5].label);
  const { projects, projectsPage } = t;

  return (
    <>
      <PageHeader title={t.home.projectsTitle} subtitle={projectsPage.subtitle} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                {p.image ? (
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                    />
                  </div>
                ) : (
                  <Placeholder label={p.title} className="aspect-[4/3] w-full rounded-none transition-transform group-hover:scale-[1.02]" />
                )}
                <div className="p-6">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                    {p.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">📍 {p.location} · {p.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
