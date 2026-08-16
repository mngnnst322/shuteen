import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HideOnAdmin } from "./components/HideOnAdmin";
import { Providers } from "./lib/providers";
import { readLang, LANG_COOKIE, AUTH_COOKIE } from "./lib/content";
import { company } from "./lib/site";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.name} — ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.intro,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = readLang(cookieStore.get(LANG_COOKIE)?.value);
  const isAdmin = cookieStore.get(AUTH_COOKIE)?.value === "admin";

  return (
    <html lang={lang} data-scroll-behavior="smooth" className={`${roboto.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-slate-900">
        <Providers initialLang={lang} initialAdmin={isAdmin}>
          <HideOnAdmin>
            <Header />
          </HideOnAdmin>
          <main className="flex-1">{children}</main>
          <HideOnAdmin>
            <Footer />
          </HideOnAdmin>
        </Providers>
      </body>
    </html>
  );
}
