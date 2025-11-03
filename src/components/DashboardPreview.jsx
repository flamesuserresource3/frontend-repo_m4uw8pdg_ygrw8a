import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

function StatCard({ title, value, icon: Icon, color }) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`rounded-xl p-3 ${color}`}
             aria-hidden="true">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-300">{title}</p>
          <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPreview() {
  return (
    <section id="demo" className="pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard title="Present" value="324" icon={CheckCircle2} color="bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30" />
              <StatCard title="Absent" value="28" icon={XCircle} color="bg-rose-50 text-rose-600 dark:bg-rose-900/30" />
              <StatCard title="Unverified" value="12" icon={AlertTriangle} color="bg-amber-50 text-amber-600 dark:bg-amber-900/30" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-2 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Weekly Attendance Trend</h4>
                <div className="mt-4 h-40 flex items-end gap-2">
                  {[60, 72, 65, 78, 90, 84, 70].map((v, i) => (
                    <div key={i} className="flex-1">
                      <div className="mx-auto w-6 rounded-t-md bg-blue-500/80" style={{ height: `${v}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-xs text-slate-500">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Recent Activity</h4>
                <ul className="mt-3 space-y-3 text-sm">
                  <li className="flex items-start justify-between">
                    <span className="text-slate-700 dark:text-slate-300">CSC201 attendance submitted</span>
                    <span className="text-slate-500">2m ago</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span className="text-slate-700 dark:text-slate-300">OCR flagged 3 unclear entries</span>
                    <span className="text-slate-500">25m ago</span>
                  </li>
                  <li className="flex items-start justify-between">
                    <span className="text-slate-700 dark:text-slate-300">Face dataset updated for 12 students</span>
                    <span className="text-slate-500">1h ago</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
