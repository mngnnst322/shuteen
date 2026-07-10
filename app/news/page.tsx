"use client";

import { PageHeader } from "../components/PageHeader";
import { Placeholder } from "../components/Placeholder";
import { useContent, usePageTitle } from "../lib/providers";

export default function NewsPage() {
  const t = useContent();
  usePageTitle(t.nav[3].label);
  const { news, newsPage } = t;

  return (
    <>
      <PageHeader title={t.nav[3].label} subtitle={newsPage.subtitle} />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {news.map((n) => (
              <article key={n.slug} className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
                <Placeholder label={newsPage.imageLabel} className="aspect-video w-full rounded-none" />
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs font-medium text-brand-600">{n.date}</time>
                  <h2 className="mt-2 font-display text-lg font-semibold text-slate-900">{n.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{n.excerpt}</p>
                  <span className="mt-4 text-sm font-semibold text-slate-400">{newsPage.readMore}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
