import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[520px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 border border-slate-200/60 dark:border-slate-800">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/80 dark:from-slate-950/80 dark:via-transparent dark:to-slate-950/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Smart Attendance for Modern Campuses
              </h1>
              <p className="mt-4 text-slate-700 dark:text-slate-300 text-lg">
                Combine face recognition, OCR and intuitive manual entry to capture accurate attendance in minutes.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#features" className="inline-flex items-center rounded-lg bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Explore Features
                </a>
                <a href="#demo" className="inline-flex items-center rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-2.5 text-slate-800 dark:text-slate-200 font-medium shadow hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
