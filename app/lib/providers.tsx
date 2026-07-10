"use client";

// ============================================================================
//  Хэл (i18n) ба нэвтрэлтийн (mock auth) client Provider-ууд.
//  Эхний утгыг серверээс (cookie-оос) дамжуулж өгснөөр flash/hydration
//  зөрчлөөс сэргийлнэ. Backend холбогдох үед useAuth-г жинхэнэ session-оор
//  сольж болно.
// ============================================================================

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content, LANG_COOKIE, AUTH_COOKIE, type Dict, type Lang } from "./content";

const ONE_YEAR = 60 * 60 * 24 * 365;

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
}

function clearCookie(name: string) {
  document.cookie = `${name}=; path=/; max-age=0; samesite=lax`;
}

// ---- Хэл --------------------------------------------------------------------
type LangCtx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: Dict };

const LanguageContext = createContext<LangCtx | null>(null);

// ---- Нэвтрэлт ---------------------------------------------------------------
type AuthCtx = { isAdmin: boolean; login: () => void; logout: () => void };

const AuthContext = createContext<AuthCtx | null>(null);

export function Providers({
  initialLang,
  initialAdmin,
  children,
}: {
  initialLang: Lang;
  initialAdmin: boolean;
  children: React.ReactNode;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [isAdmin, setIsAdmin] = useState<boolean>(initialAdmin);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    setCookie(LANG_COOKIE, l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  }, []);

  const toggle = useCallback(() => setLang(lang === "mn" ? "en" : "mn"), [lang, setLang]);

  const langValue = useMemo<LangCtx>(
    () => ({ lang, setLang, toggle, t: content[lang] }),
    [lang, setLang, toggle]
  );

  const login = useCallback(() => {
    setIsAdmin(true);
    setCookie(AUTH_COOKIE, "admin");
  }, []);

  const logout = useCallback(() => {
    setIsAdmin(false);
    clearCookie(AUTH_COOKIE);
  }, []);

  const authValue = useMemo<AuthCtx>(() => ({ isAdmin, login, logout }), [isAdmin, login, logout]);

  return (
    <LanguageContext.Provider value={langValue}>
      <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
    </LanguageContext.Provider>
  );
}

export function useLang(): LangCtx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within <Providers>");
  return ctx;
}

// Хамгийн түгээмэл: тухайн хэлний агуулгын толь бичгийг буцаана.
export function useContent(): Dict {
  return useLang().t;
}

export function useAuth(): AuthCtx {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <Providers>");
  return ctx;
}

// Client хуудсанд орчуулсан <title>-г тохируулна (metadata export-ыг орлоно).
export function usePageTitle(title: string) {
  const { t } = useLang();
  useEffect(() => {
    document.title = `${title} | ${t.company.name}`;
  }, [title, t.company.name]);
}
