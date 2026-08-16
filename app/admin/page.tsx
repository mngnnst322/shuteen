import Link from "next/link";
import { AdminTitle, Card, StatCard, Table, Badge, MockNote } from "./ui";

// Жишээ захиалгууд (backend-ээс татна)
const recentOrders = [
  { id: "#1024", name: "Б. Болд", type: "Хоёр цонх", date: "2026-06-27", status: "Шинэ" },
  { id: "#1023", name: "Д. Сараа", type: "Тагттай цонх", date: "2026-06-26", status: "Хүлээгдэж буй" },
  { id: "#1022", name: "Г. Тэмүүлэн", type: "Гурав цонх", date: "2026-06-25", status: "Дууссан" },
];

export default function AdminDashboard() {
  return (
    <>
      <AdminTitle title="Хяналтын самбар" />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon="🧾" value="128" label="Нийт захиалга" />
        <StatCard icon="🆕" value="12" label="Шинэ захиалга" />
        <StatCard icon="💬" value="34" label="Шинэ зурвас" />
        <StatCard icon="🏢" value="12" label="Хэрэгжсэн төсөл" />
      </div>

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-slate-900">Сүүлийн захиалгууд</h2>
          <Link href="/admin/orders" className="text-sm font-medium text-accent-700 hover:text-accent-800">
            Бүгдийг үзэх →
          </Link>
        </div>
        <Table head={["Дугаар", "Захиалагч", "Төрөл", "Огноо", "Төлөв"]}>
          {recentOrders.map((o) => (
            <tr key={o.id} className="hover:bg-slate-50">
              <td className="px-5 py-3 font-medium text-slate-900">{o.id}</td>
              <td className="px-5 py-3">{o.name}</td>
              <td className="px-5 py-3 text-slate-600">{o.type}</td>
              <td className="px-5 py-3 text-slate-500">{o.date}</td>
              <td className="px-5 py-3">
                <Badge color={o.status === "Шинэ" ? "blue" : o.status === "Дууссан" ? "green" : "amber"}>
                  {o.status}
                </Badge>
              </td>
            </tr>
          ))}
        </Table>
        <MockNote />
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <Card>
          <h3 className="font-display font-bold text-slate-900">Түргэн үйлдэл</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/admin/products" className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-medium text-brand-950">
              + Бүтээгдэхүүн нэмэх
            </Link>
            <Link href="/admin/news" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
              + Мэдээ нэмэх
            </Link>
            <Link href="/admin/projects" className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
              + Төсөл нэмэх
            </Link>
          </div>
        </Card>
        <Card>
          <h3 className="font-display font-bold text-slate-900">Тэмдэглэл</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Энэхүү админ нь зөвхөн frontend бүтэц юм. Захиалга, мэдээ, төслийн өгөгдлийг өөрийн
            backend (API + өгөгдлийн сан)-тай холбосноор бодит удирдлага идэвхжинэ.
          </p>
        </Card>
      </div>
    </>
  );
}
