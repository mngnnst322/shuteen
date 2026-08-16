"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useLang } from "../lib/providers";

export default function HeroSlider() {
  const { t } = useLang();
  const slides = t.hero;
  const [i, setI] = useState(0);
  const count = slides.length;

  const go = useCallback((n: number) => setI((p) => (p + n + count) % count), [count]);

  // авто солих
  useEffect(() => {
    const timer = setInterval(() => setI((p) => (p + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className="relative h-[520px] w-full overflow-hidden text-white sm:h-[600px]">
      {/* Слайдууд */}
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === i ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          style={{ background: s.bg }}
        >
          {/* харанхуй давхарга — текст уншигдахуйц байх */}
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
            <h1 className="max-w-3xl font-display text-3xl font-black uppercase leading-tight sm:text-5xl">
              {s.heading}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              {s.subtitle}
            </p>
            <div className="mt-8">
              <Link
                href={s.ctaHref}
                className="inline-block rounded-md bg-accent-500 px-8 py-3 font-semibold text-brand-950 transition-colors hover:bg-accent-600"
              >
                {s.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Зүүн/баруун сум */}
      <button
        type="button"
        aria-label={t.ui.prev}
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md bg-black/30 text-2xl text-white backdrop-blur transition-colors hover:bg-black/50 sm:left-6"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label={t.ui.next}
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-md bg-black/30 text-2xl text-white backdrop-blur transition-colors hover:bg-black/50 sm:right-6"
      >
        ›
      </button>

      {/* Доод цэгүүд */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`${t.ui.slide} ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === i ? "w-7 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
