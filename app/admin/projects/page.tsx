import { AdminTitle, Table, MockNote } from "../ui";
import { projects } from "../../lib/site";

export default function AdminProjects() {
  return (
    <>
      <AdminTitle
        title="Төслүүд"
        action={
          <button className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white">
            + Төсөл нэмэх
          </button>
        }
      />
      <Table head={["Нэр", "Байршил", "Он", "Ангилал", "Үйлдэл"]}>
        {projects.map((p) => (
          <tr key={p.title} className="hover:bg-slate-50">
            <td className="px-5 py-3 font-medium text-slate-900">{p.title}</td>
            <td className="px-5 py-3 text-slate-600">{p.location}</td>
            <td className="px-5 py-3 text-slate-500">{p.year}</td>
            <td className="px-5 py-3 text-slate-600">{p.category}</td>
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
