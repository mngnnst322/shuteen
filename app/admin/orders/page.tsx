import { AdminTitle, Table, Badge, MockNote } from "../ui";

const orders = [
  { id: "#1024", name: "Б. Болд", phone: "9911-2233", type: "Хоёр цонх", color: "Цагаан", date: "2026-06-27", status: "Шинэ" },
  { id: "#1023", name: "Д. Сараа", phone: "8855-7788", type: "Тагттай цонх", color: "Хүрэн", date: "2026-06-26", status: "Хүлээгдэж буй" },
  { id: "#1022", name: "Г. Тэмүүлэн", phone: "9090-1010", type: "Гурав цонх", color: "Саарал", date: "2026-06-25", status: "Дууссан" },
  { id: "#1021", name: "Н. Оюун", phone: "9512-3434", type: "Нэг цонх", color: "Царс мод", date: "2026-06-24", status: "Цуцалсан" },
];

const statusColor = (s: string) =>
  s === "Шинэ" ? "blue" : s === "Дууссан" ? "green" : s === "Цуцалсан" ? "slate" : "amber";

export default function AdminOrders() {
  return (
    <>
      <AdminTitle title="Захиалгууд" />
      <Table head={["Дугаар", "Захиалагч", "Утас", "Төрөл", "Өнгө", "Огноо", "Төлөв", ""]}>
        {orders.map((o) => (
          <tr key={o.id} className="hover:bg-slate-50">
            <td className="px-5 py-3 font-medium text-slate-900">{o.id}</td>
            <td className="px-5 py-3">{o.name}</td>
            <td className="px-5 py-3 text-slate-600">{o.phone}</td>
            <td className="px-5 py-3 text-slate-600">{o.type}</td>
            <td className="px-5 py-3 text-slate-600">{o.color}</td>
            <td className="px-5 py-3 text-slate-500">{o.date}</td>
            <td className="px-5 py-3">
              <Badge color={statusColor(o.status) as "green" | "amber" | "blue" | "slate"}>{o.status}</Badge>
            </td>
            <td className="px-5 py-3 text-right">
              <button className="text-sm font-medium text-brand-600 hover:text-brand-700">Үзэх</button>
            </td>
          </tr>
        ))}
      </Table>
      <MockNote />
    </>
  );
}
