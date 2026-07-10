"use client";

import { useState } from "react";
import { useContent } from "../lib/providers";

// ЗӨВХӨН FRONTEND — одоогоор хүсэлтийг хаашаа ч илгээхгүй.
// Backend талд: доорх handleSubmit дотроос API руу fetch/POST хийнэ.

export function ContactForm() {
  const { contact } = useContent();
  const f = contact.form;
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO (backend): энд маягтын өгөгдлийг сервер рүү илгээнэ
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    setSent(true);
    e.currentTarget.reset();
  }

  const field =
    "mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="text-sm font-medium text-slate-700">{f.name}</label>
        <input name="name" required placeholder={f.namePlaceholder} className={field} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">{f.phone}</label>
          <input name="phone" required placeholder={f.phonePlaceholder} className={field} />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">{f.email}</label>
          <input name="email" type="email" placeholder={f.emailPlaceholder} className={field} />
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-700">{f.message}</label>
        <textarea name="message" rows={4} required placeholder={f.messagePlaceholder} className={field} />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-700"
      >
        {f.submit}
      </button>
      {sent && (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">{f.success}</p>
      )}
    </form>
  );
}
