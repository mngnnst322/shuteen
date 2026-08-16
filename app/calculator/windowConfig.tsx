// ============================================================================
//  ЦОНХНЫ ТОХИРГООНЫ ӨГӨГДӨЛ + СХЕМ ЗУРАГ (зөвхөн frontend)
//  Нээгдэх хэлбэрийн тэмдэглэгээ:
//    fixed      → × (нээгдэхгүй, тогтмол)
//    turnL/turnR→ нэг талдаа нугастай (нээгддэг)
//    tilt       → дээшээ хазайж онгойдог
//    tiltTurnL/R→ хазайж + нээгдэх хосолсон
// ============================================================================

export type Opening =
  | "fixed"
  | "turnL"
  | "turnR"
  | "tilt"
  | "tiltTurnL"
  | "tiltTurnR";

export type WindowConfig = { panes: Opening[]; door?: boolean };

export type Design = {
  id: string;
  label: string;
  panesCount: number;
  door?: boolean;
  // Жинхэнэ зураг (public/ доторх зам). Байвал схемийн оронд үзүүлнэ.
  image?: string;
};

export const DESIGNS: Design[] = [
  { id: "one", label: "Нэг цонх", panesCount: 1, image: "/tsonkh-nariin-animated.svg" },
  { id: "two", label: "Хоёр цонх", panesCount: 2, image: "/tsonkh-hoyor-nariin-animated.svg" },
  { id: "three", label: "Гурав цонх", panesCount: 3, image: "/tsonkh-gurav-nariin-animated.svg" },
  { id: "door", label: "Тагттай цонх", panesCount: 1, door: true, image: "/tagt-haalga-tsonkh-animated.svg" },
];

export const CONFIGS: Record<string, WindowConfig[]> = {
  one: [
    { panes: ["fixed"] },
    { panes: ["turnL"] },
    { panes: ["tiltTurnL"] },
  ],
  two: [
    { panes: ["fixed", "fixed"] },
    { panes: ["turnL", "fixed"] },
    { panes: ["fixed", "tiltTurnR"] },
    { panes: ["tiltTurnL", "fixed"] },
    { panes: ["tilt", "tilt"] },
    { panes: ["tiltTurnL", "tiltTurnR"] },
  ],
  three: [
    { panes: ["fixed", "fixed", "fixed"] },
    { panes: ["turnL", "fixed", "turnR"] },
    { panes: ["fixed", "tiltTurnL", "fixed"] },
    { panes: ["turnL", "fixed", "tiltTurnR"] },
    { panes: ["tiltTurnL", "fixed", "fixed"] },
    { panes: ["fixed", "fixed", "tiltTurnR"] },
    { panes: ["turnL", "turnR", "turnL"] },
    { panes: ["tiltTurnL", "turnR", "fixed"] },
    { panes: ["tiltTurnL", "tiltTurnL", "tiltTurnL"] },
    { panes: ["tiltTurnL", "fixed", "tiltTurnR"] },
  ],
  door: [
    { panes: ["turnL"], door: true },
    { panes: ["tiltTurnL"], door: true },
    { panes: ["turnR"], door: true },
    { panes: ["tiltTurnR"], door: true },
    { panes: ["tiltTurnL"], door: true },
    { panes: ["fixed"], door: true },
    { panes: ["turnL"], door: true },
    { panes: ["tilt"], door: true },
    { panes: ["tiltTurnR"], door: true },
    { panes: ["tiltTurnL"], door: true },
  ],
};

// --- Нэг хавтгайн (sash) нээгдэх хэлбэрийн зураасууд ----------------------
function symbolLines(o: Opening, x: number, y: number, w: number, h: number) {
  const TL: [number, number] = [x, y];
  const TR: [number, number] = [x + w, y];
  const BL: [number, number] = [x, y + h];
  const BR: [number, number] = [x + w, y + h];
  const ML: [number, number] = [x, y + h / 2];
  const MR: [number, number] = [x + w, y + h / 2];
  const MT: [number, number] = [x + w / 2, y];

  const seg = (a: [number, number], b: [number, number], i: number) => (
    <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} />
  );

  switch (o) {
    case "fixed":
      return [seg(TL, BR, 0), seg(TR, BL, 1)];
    case "turnL":
      return [seg(TR, ML, 0), seg(BR, ML, 1)];
    case "turnR":
      return [seg(TL, MR, 0), seg(BL, MR, 1)];
    case "tilt":
      return [seg(BL, MT, 0), seg(BR, MT, 1)];
    case "tiltTurnL":
      return [seg(TR, ML, 0), seg(BR, ML, 1), seg(BL, MT, 2), seg(BR, MT, 3)];
    case "tiltTurnR":
      return [seg(TL, MR, 0), seg(BL, MR, 1), seg(BL, MT, 2), seg(BR, MT, 3)];
  }
}

// --- Жижиг схем (сонголтын товчинд) ---------------------------------------
export function Schematic({ config }: { config: WindowConfig }) {
  const n = config.panes.length;
  const W = 60;
  const H = config.door ? 64 : 46;
  const pad = 5;
  const cw = (W - 2 * pad) / n;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" fill="none">
      {config.panes.map((o, i) => {
        const x = pad + i * cw;
        const y = pad;
        const w = cw;
        const h = H - 2 * pad;
        // Тагттай цонх: доод тал нь дүүрэн хаалга
        const splitY = config.door ? y + h * 0.6 : y;
        const symH = config.door ? h * 0.6 : h;
        return (
          <g key={i} stroke="#1e293b" strokeWidth={1}>
            <rect x={x} y={y} width={w} height={h} />
            {config.door && (
              <>
                <line x1={x} y1={splitY} x2={x + w} y2={splitY} />
                <rect x={x} y={splitY} width={w} height={y + h - splitY} fill="#cbd5e1" stroke="none" />
                <rect x={x} y={splitY} width={w} height={y + h - splitY} fill="none" />
              </>
            )}
            {symbolLines(o, x, y, w, symH)}
          </g>
        );
      })}
    </svg>
  );
}

// --- Том урьдчилан харах цонх ----------------------------------------------
export function WindowPreview({
  config,
  innerColor = "#ffffff",
}: {
  config: WindowConfig;
  innerColor?: string;
}) {
  const n = config.panes.length;
  const W = 340;
  const H = config.door ? 420 : 280;
  const frame = 18; // хүрээний зузаан
  const innerX = frame;
  const innerY = frame;
  const innerW = W - frame * 2;
  const innerH = H - frame * 2;
  const cw = innerW / n;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ maxHeight: 460 }}>
      <defs>
        <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eaf3fb" />
          <stop offset="55%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#cfe4f5" />
        </linearGradient>
      </defs>

      {/* Гадна хүрээ */}
      <rect x={0} y={0} width={W} height={H} rx={6} fill={innerColor} stroke="#cbd5e1" strokeWidth={1} />
      <rect
        x={3}
        y={3}
        width={W - 6}
        height={H - 6}
        rx={4}
        fill="none"
        stroke="#e2e8f0"
        strokeWidth={1}
      />

      {config.panes.map((o, i) => {
        const x = innerX + i * cw;
        const y = innerY;
        const w = cw;
        const h = innerH;
        const splitY = config.door ? y + h * 0.62 : y;
        const symH = config.door ? h * 0.62 : h;
        const inset = 6;
        return (
          <g key={i}>
            {/* sash хүрээ */}
            <rect x={x + 3} y={y} width={w - 6} height={h} fill={innerColor} stroke="#cbd5e1" strokeWidth={1} />
            {/* шил */}
            <rect
              x={x + 3 + inset}
              y={y + inset}
              width={w - 6 - inset * 2}
              height={(config.door ? symH : h) - inset * 2}
              fill="url(#glass)"
              stroke="#bcd3ea"
              strokeWidth={1}
            />
            {/* Тагттай доод хаалга */}
            {config.door && (
              <rect
                x={x + 3 + inset}
                y={splitY + inset}
                width={w - 6 - inset * 2}
                height={y + h - splitY - inset * 2}
                fill={innerColor}
                stroke="#d7dee7"
                strokeWidth={1}
              />
            )}
            {/* нээгдэх схем (бүдэг) */}
            <g stroke="#94a3b8" strokeWidth={1} fill="none" opacity={0.7}>
              {symbolLines(o, x + 3 + inset, y + inset, w - 6 - inset * 2, symH - inset * 2)}
            </g>
            {/* бариул */}
            {o !== "fixed" && (
              <rect
                x={o.includes("R") ? x + 6 : x + w - 11}
                y={y + (config.door ? symH / 2 : h / 2) - 8}
                width={4}
                height={16}
                rx={2}
                fill="#64748b"
              />
            )}
          </g>
        );
      })}
    </svg>
  );
}
