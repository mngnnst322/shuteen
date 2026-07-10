// Дотоод хуудаснуудын дээд гарчгийн хэсэг

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-brand-800 to-brand-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">{title}</h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-brand-100">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
