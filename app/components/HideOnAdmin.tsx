"use client";

import { usePathname } from "next/navigation";

// Админ (/admin*) хуудсуудад нийтийн Header/Footer-г нуудаг.
export function HideOnAdmin({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <>{children}</>;
}
