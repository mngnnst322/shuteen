import { AdminTitle, Table, MockNote } from "../ui";
import { services } from "../../lib/site";

export default function AdminProducts() {
  return (
    <>
      <AdminTitle
        title="Бүтээгдэхүүн ба үйлчилгээ"
        action={
          <button className="rounded-lg bg-accent-500 px-4 py-2 text-sm font-medium text-brand-950">
            + Шинээр нэмэх
          </button>
        }
      />
      <Table head={["", "Нэр", "Тайлбар", "Үйлдэл"]}>
        {services.map((s) => (
          <tr key={s.title} className="hover:bg-slate-50">
            <td className="px-5 py-3 text-2xl">{s.icon}</td>
            <td className="px-5 py-3 font-medium text-slate-900">{s.title}</td>
            <td className="max-w-md px-5 py-3 text-slate-600">{s.description}</td>
            <td className="px-5 py-3">
              <div className="flex gap-3">
                <button className="text-sm font-medium text-accent-700 hover:text-accent-800">Засах</button>
                <button className="text-sm font-medium text-red-500 hover:text-red-600">Устгах</button>
              </div>
            </td>
          </tr>
        ))}
      </Table>
      <MockNote />
    </>
  );
}
