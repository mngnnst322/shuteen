// Админ хуудаснуудын хуваалцах жижиг бүрдлүүд

export function AdminTitle({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="font-display text-2xl font-bold text-slate-900">{title}</h1>
      {action}
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-slate-200 bg-white p-6 ${className}`}>{children}</div>
  );
}

export function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <Card className="flex items-center gap-4">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl">{icon}</span>
      <div>
        <div className="font-display text-2xl font-black text-slate-900">{value}</div>
        <div className="text-sm text-slate-500">{label}</div>
      </div>
    </Card>
  );
}

export function Table({ head, children }: { head: string[]; children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="border-b border-slate-200 bg-slate-50 text-slate-500">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-5 py-3 font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">{children}</tbody>
      </table>
    </div>
  );
}

export function Badge({ color, children }: { color: "green" | "amber" | "blue" | "slate"; children: React.ReactNode }) {
  const map = {
    green: "bg-green-50 text-green-700",
    amber: "bg-amber-50 text-amber-700",
    blue: "bg-brand-50 text-brand-700",
    slate: "bg-slate-100 text-slate-600",
  };
  return <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${map[color]}`}>{children}</span>;
}

// FRONTEND-only товч (backend холбохыг сануулсан)
export function MockNote() {
  return (
    <p className="mt-4 text-xs text-slate-400">
      * Энэ хэсэг зөвхөн харагдах загвар. Өгөгдөл нэмэх / засах / устгах үйлдлийг backend (API,
      өгөгдлийн сан) холбосны дараа ажиллана.
    </p>
  );
}
