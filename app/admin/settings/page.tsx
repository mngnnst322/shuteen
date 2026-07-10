import { AdminTitle, Card, MockNote } from "../ui";
import { company } from "../../lib/site";

const field = "mt-1 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

export default function AdminSettings() {
  return (
    <>
      <AdminTitle title="Тохиргоо" />
      <Card className="max-w-2xl">
        <h2 className="font-display text-lg font-bold text-slate-900">Компанийн мэдээлэл</h2>
        <div className="mt-5 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Компанийн нэр</label>
            <input defaultValue={company.name} className={field} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-slate-700">Утас 1</label>
              <input defaultValue={company.phones[0]} className={field} />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Утас 2</label>
              <input defaultValue={company.phones[1]} className={field} />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">И-мэйл</label>
            <input defaultValue={company.email} className={field} />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Хаяг</label>
            <input defaultValue={company.address} className={field} />
          </div>
          <button className="rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-medium text-white">
            Хадгалах
          </button>
        </div>
        <MockNote />
      </Card>
    </>
  );
}
