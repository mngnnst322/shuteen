import { AdminTitle, Table, MockNote } from "../ui";
import { news } from "../../lib/site";

export default function AdminNews() {
  return (
    <>
      <AdminTitle
        title="Мэдээ"
        action={
          <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white">
            + Мэдээ нэмэх
          </button>
        }
      />
      <Table head={["Гарчиг", "Огноо", "Товч", "Үйлдэл"]}>
        {news.map((n) => (
          <tr key={n.slug} className="hover:bg-slate-50">
            <td className="px-5 py-3 font-medium text-slate-900">{n.title}</td>
            <td className="px-5 py-3 text-slate-500">{n.date}</td>
            <td className="max-w-sm truncate px-5 py-3 text-slate-600">{n.excerpt}</td>
            <td className="px-5 py-3">
              <div className="flex gap-3">
                <button className="text-sm font-medium text-brand-600 hover:text-brand-700">Засах</button>
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
