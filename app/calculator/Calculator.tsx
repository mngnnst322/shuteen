"use client";

// ЗӨВХӨН FRONTEND configurator.
// Сонголтын төлвийг (selection) backend руу илгээж захиалга/үнэ бодуулна.
// TODO (backend): selection-г /api/order руу POST хийх.

import { useMemo, useState } from "react";
import { useContent } from "../lib/providers";
import {
  CONFIGS,
  DESIGNS,
  Schematic,
  WindowPreview,
  type Design,
} from "./windowConfig";

// Дизайн товчны жижиг дүрс (саарал хавтгайнууд)
function DesignIcon({ design }: { design: Design }) {
  if (design.door) {
    return (
      <span className="flex items-end gap-0.5">
        <span className="block h-6 w-2.5 rounded-[2px] bg-slate-400" />
        <span className="block h-3 w-2.5 rounded-[2px] bg-slate-400" />
      </span>
    );
  }
  return (
    <span className="flex items-center gap-0.5">
      {Array.from({ length: design.panesCount }).map((_, i) => (
        <span key={i} className="block h-6 w-2.5 rounded-[2px] bg-slate-400" />
      ))}
    </span>
  );
}

function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 py-2">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
          checked ? "bg-brand-600" : "bg-slate-300"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-all ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </button>
      <span className="text-slate-700">{label}</span>
    </label>
  );
}

// Өнгөний id ба hex (нэр нь хэлээр орчуулагдана)
const COLORS = [
  { id: "white", hex: "#ffffff" },
  { id: "gray", hex: "#9ca3af" },
  { id: "brown", hex: "#6b4f3a" },
  { id: "oak", hex: "#c89b6a" },
];

export function Calculator() {
  const { calculator: c } = useContent();
  const [designId, setDesignId] = useState(DESIGNS[0].id);
  const [configIdx, setConfigIdx] = useState(0);
  const [innerColor, setInnerColor] = useState(COLORS[0]);
  const [diffOuter, setDiffOuter] = useState(false);
  const [hasSeal, setHasSeal] = useState(false);
  const [hasSill, setHasSill] = useState(false);
  const [showColors, setShowColors] = useState(false);

  const design = DESIGNS.find((d) => d.id === designId)!;
  const configs = CONFIGS[designId];
  const config = configs[configIdx] ?? configs[0];
  const designLabel = c.designs[design.id] ?? design.label;
  const innerColorLabel = c.colors[innerColor.id] ?? innerColor.id;

  // Backend руу илгээх төлөв (одоогоор зөвхөн харуулна)
  const selection = useMemo(
    () => ({
      design: design.id,
      configIndex: configIdx,
      innerColor: innerColor.id,
      differentOuterColor: diffOuter,
      seal: hasSeal,
      sill: hasSill,
    }),
    [design, configIdx, innerColor, diffOuter, hasSeal, hasSill]
  );

  function selectDesign(id: string) {
    setDesignId(id);
    setConfigIdx(0);
  }

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-8">
      {/* 1. Дизайн сонгох */}
      <h2 className="font-display text-lg font-bold text-slate-900">{c.chooseDesign}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {DESIGNS.map((d) => {
          const active = d.id === designId;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => selectDesign(d.id)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-4 text-left transition-colors ${
                active
                  ? "border-brand-300 bg-brand-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <DesignIcon design={d} />
              <span className="text-sm font-medium text-slate-800">{c.designs[d.id] ?? d.label}</span>
            </button>
          );
        })}
      </div>

      {/* 2. Тохиргоо сонгох */}
      <h3 className="mt-8 font-display text-lg font-bold text-slate-900">{c.chooseConfig}</h3>
      <div className="mt-4 flex flex-wrap gap-3">
        {configs.map((cfg, i) => {
          const active = i === configIdx;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setConfigIdx(i)}
              aria-label={`${c.config} ${i + 1}`}
              className={`grid h-20 w-20 place-items-center rounded-xl border p-2 transition-colors ${
                active
                  ? "border-brand-300 bg-brand-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="h-full w-full">
                <Schematic config={cfg} />
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Урьдчилан харах + тохиргоо */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Preview */}
        <div className="grid place-items-center rounded-2xl bg-gradient-to-br from-slate-200 to-brand-100 p-6">
          {design.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={design.image}
              alt={designLabel}
              className="w-full rounded-xl object-contain"
              style={{ maxHeight: 460 }}
            />
          ) : (
            <WindowPreview config={config} innerColor={innerColor.hex} />
          )}
        </div>

        {/* Тохиргооны самбар */}
        <div>
          {/* Дотор өнгө */}
          <button
            type="button"
            onClick={() => setShowColors((v) => !v)}
            className="flex w-full items-center gap-4 border-b border-slate-100 pb-4 text-left"
          >
            <span
              className="h-14 w-14 shrink-0 rounded-xl border border-slate-200"
              style={{ backgroundColor: innerColor.hex }}
            />
            <span className="flex-1">
              <span className="block font-display text-lg font-semibold text-slate-900">
                {c.innerColorTitle}
              </span>
              <span className="block text-sm text-slate-500">{c.colorPrefix} {innerColorLabel}</span>
            </span>
            <span className={`text-slate-400 transition-transform ${showColors ? "rotate-180" : ""}`}>
              ▾
            </span>
          </button>

          {showColors && (
            <div className="flex flex-wrap gap-3 border-b border-slate-100 py-4">
              {COLORS.map((color) => (
                <button
                  key={color.id}
                  type="button"
                  onClick={() => {
                    setInnerColor(color);
                    setShowColors(false);
                  }}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                    innerColor.id === color.id ? "border-brand-400 bg-brand-50" : "border-slate-200"
                  }`}
                >
                  <span className="h-5 w-5 rounded border border-slate-200" style={{ backgroundColor: color.hex }} />
                  {c.colors[color.id] ?? color.id}
                </button>
              ))}
            </div>
          )}

          {/* Toggle-ууд */}
          <div className="mt-2 divide-y divide-slate-100">
            <Toggle checked={diffOuter} onChange={setDiffOuter} label={c.toggleOuter} />
            <Toggle checked={hasSeal} onChange={setHasSeal} label={c.toggleSeal} />
            <Toggle checked={hasSill} onChange={setHasSill} label={c.toggleSill} />
          </div>

          {/* Захиалга — selection-г backend руу дамжуулна */}
          <a
            href="/contact"
            data-selection={JSON.stringify(selection)}
            className="mt-6 block rounded-full bg-accent-500 px-6 py-3 text-center font-semibold text-brand-950 hover:bg-accent-600"
          >
            {c.orderButton}
          </a>
          <p className="mt-3 text-xs leading-5 text-slate-400">{c.disclaimer}</p>
        </div>
      </div>
    </div>
  );
}
