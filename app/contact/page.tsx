"use client";

import { PageHeader } from "../components/PageHeader";
import { ContactForm } from "./ContactForm";
import { useContent, usePageTitle } from "../lib/providers";

export default function ContactPage() {
  const t = useContent();
  usePageTitle(t.nav[6].label);
  const { company, contact } = t;

  return (
    <>
      <PageHeader title={t.nav[6].label} subtitle={contact.subtitle} />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          {/* Холбоо барих мэдээлэл */}
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900">{contact.infoTitle}</h2>
            <ul className="mt-6 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">📍</span>
                <div>
                  <div className="font-medium text-slate-900">{contact.addressLabel}</div>
                  <div className="text-slate-600">{company.address}</div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">☎</span>
                <div>
                  <div className="font-medium text-slate-900">{contact.phoneLabel}</div>
                  {company.phones.map((p, i) => (
                    <div key={i}>
                      <a href={`tel:${p.replace(/\s/g, "")}`} className="text-slate-600 hover:text-brand-600">{p}</a>
                    </div>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">✉</span>
                <div>
                  <div className="font-medium text-slate-900">{contact.emailLabel}</div>
                  <a href={`mailto:${company.email}`} className="text-slate-600 hover:text-brand-600">{company.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">🕐</span>
                <div>
                  <div className="font-medium text-slate-900">{contact.hoursLabel}</div>
                  <div className="text-slate-600">{company.workHours}</div>
                </div>
              </li>
            </ul>

            {/* Газрын зургийн байрлал — манай үйлдвэр */}
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
              <iframe
                title={contact.mapPlaceholder}
                src="https://www.google.com/maps?q=47.950631,106.9097126&z=16&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Форм */}
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-slate-900">{contact.formTitle}</h2>
            <p className="mt-2 text-sm text-slate-500">{contact.formSubtitle}</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
