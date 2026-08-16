"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContent, useAuth, usePageTitle } from "../lib/providers";

const field =
  "mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

export default function LoginPage() {
  const { company, login: l } = useContent();
  const { login } = useAuth();
  const router = useRouter();
  usePageTitle(l.title);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO (backend): нэвтрэлтийг сервер талд шалгана. Одоогоор mock.
    login();
    router.push("/admin");
  }

  return (
    <div className="grid min-h-[70vh] place-items-center px-6 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center">
          <img src="/logo.png" alt={company.name} className="h-12 w-auto" />
          <h1 className="mt-4 font-display text-xl font-bold text-slate-900">{l.title}</h1>
          <p className="text-sm text-slate-500">{l.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">{l.username}</label>
            <input name="username" placeholder={l.usernamePlaceholder} className={field} />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">{l.password}</label>
            <input name="password" type="password" placeholder={l.passwordPlaceholder} className={field} />
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-700"
          >
            {l.submit}
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-slate-400">{l.hint}</p>

        <Link href="/" className="mt-5 block text-center text-sm text-slate-400 hover:text-slate-600">
          {l.back}
        </Link>
      </div>
    </div>
  );
}
