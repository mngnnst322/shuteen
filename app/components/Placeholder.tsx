// Түр зураг (placeholder) — дараа нь жинхэнэ зургаар солино.
// Хэрэглээ: <Placeholder label="Цонхны зураг" className="aspect-video" />

export function Placeholder({
  label = "Зураг",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-100 to-brand-300 ${className}`}
    >
      {/* энгийн торон загвар */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff55 1px, transparent 1px), linear-gradient(90deg, #ffffff55 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="relative z-10 rounded-full bg-white/70 px-4 py-1.5 text-sm font-medium text-brand-800">
        {label}
      </span>
    </div>
  );
}
