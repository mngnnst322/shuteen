"use client";

// Админ удирдлагын бүрхүүл — sidebar + дээд мөр.
// Зөвхөн FRONTEND бүтэц. Нэвтрэлт, өгөгдөл хадгалалтыг backend талд хийнэ.

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { company } from "../lib/site";
import { useAuth } from "../lib/providers";

const menu = [
  { href: "/admin", label: "Хяналтын самбар", icon: "📊" },
  { href: "/admin/orders", label: "Захиалга", icon: "🧾" },
  { href: "/admin/products", label: "Бүтээгдэхүүн", icon: "🪟" },
  { href: "/admin/projects", label: "Төслүүд", icon: "🏢" },
  { href: "/admin/news", label: "Мэдээ", icon: "📰" },
  { href: "/admin/settings", label: "Тохиргоо", icon: "⚙️" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { logout } = useAuth();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    logout();
    router.push("/");
  }

  // Нэвтрэх хуудсанд sidebar харуулахгүй
  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-slate-100">{children}</div>;
  }

  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  const Sidebar = (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-slate-200 bg-white">
      <Link href="/admin" className="flex items-center gap-3 px-6 py-5">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-600 font-bold text-white">
          {company.shortName}
        </span>
        <span className="font-display font-bold text-slate-900">Админ</span>
      </Link>
      <nav className="flex-1 space-y-1 px-3 py-2">
        {menu.map((m) => (
          <Link
            key={m.href}
            href={m.href}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive(m.href)
                ? "bg-brand-50 text-brand-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <span>{m.icon}</span>
            {m.label}
          </Link>
        ))}
      </nav>
      <div className="border-t border-slate-200 p-3">
        <Link href="/" className="block rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-100">
          ← Сайт руу буцах
        </Link>
        <button
          type="button"
          onClick={handleLogout}
          className="mt-1 block w-full rounded-lg px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50"
        >
          Гарах
        </button>
      </div>
    </aside>
  );

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">{Sidebar}</div>

      {/* Mobile sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-0 h-full">{Sidebar}</div>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Дээд мөр */}
        <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-md border border-slate-200 lg:hidden"
          >
            ☰
          </button>
          <div className="text-sm text-slate-500">Тавтай морил, Админ 👋</div>
          <div className="grid h-9 w-9 place-items-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">
            A
          </div>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
