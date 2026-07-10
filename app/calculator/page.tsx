"use client";

import { PageHeader } from "../components/PageHeader";
import { Calculator } from "./Calculator";
import { useContent, usePageTitle } from "../lib/providers";

export default function CalculatorPage() {
  const t = useContent();
  usePageTitle(t.nav[2].label);

  return (
    <>
      <PageHeader title={t.calculator.title} subtitle={t.calculator.subtitle} />
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Calculator />
        </div>
      </section>
    </>
  );
}
