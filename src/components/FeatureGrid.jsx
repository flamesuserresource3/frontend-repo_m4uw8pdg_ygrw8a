import { Users, ClipboardCheck, BarChart3, Camera, FileText, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Face Recognition',
    description: 'Upload a class photo or use live capture to auto-mark attendance.',
    icon: Camera,
  },
  {
    title: 'OCR from Paper',
    description: 'Scan paper registries with OCR and validate instantly.',
    icon: FileText,
  },
  {
    title: 'Manual Entry',
    description: 'Fallback to fast, keyboard-friendly web forms.',
    icon: ClipboardCheck,
  },
  {
    title: 'Role-based Access',
    description: 'Admins, teachers and staff with tailored permissions.',
    icon: Users,
  },
  {
    title: 'Analytics & Reports',
    description: 'Daily, weekly and monthly trends with quick exports.',
    icon: BarChart3,
  },
  {
    title: 'Secure by Design',
    description: 'Granular controls, audit trails and reliable backups.',
    icon: ShieldCheck,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Powerful features, streamlined workflow</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Everything you need to manage attendance across departments and classes.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-blue-50 dark:bg-blue-950/40 p-3 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
