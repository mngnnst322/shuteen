"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { company } from "../../lib/site";
import { useAuth } from "../../lib/providers";

const field = "mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

export default function AdminLogin() {
  const { login } = useAuth();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO (backend): нэвтрэлтийг сервер талд шалгана.
    login();
    router.push("/admin");
  }

  return (
    <div className="grid min-h-screen place-items-center p-6">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-600 font-display text-lg font-bold text-white">
            {company.shortName}
          </span>
          <h1 className="mt-4 font-display text-xl font-bold text-slate-900">Админ нэвтрэх</h1>
          <p className="text-sm text-slate-500">{company.name}</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Хэрэглэгчийн нэр</label>
            <input name="username" placeholder="admin" className={field} />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Нууц үг</label>
            <input name="password" type="password" placeholder="••••••••" className={field} />
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-700"
          >
            Нэвтрэх
          </button>
        </form>

        <Link href="/" className="mt-5 block text-center text-sm text-slate-400 hover:text-slate-600">
          ← Сайт руу буцах
        </Link>
      </div>
    </div>
  );
}
