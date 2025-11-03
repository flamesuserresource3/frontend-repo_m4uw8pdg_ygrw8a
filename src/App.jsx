import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import DashboardPreview from './components/DashboardPreview';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white selection:bg-blue-200/70 selection:text-blue-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 py-8 sm:py-12">
        <Hero />
        <FeatureGrid />
        <DashboardPreview />

        <section className="pb-20">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 sm:p-12 text-white">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-2xl font-bold">Ready to modernize attendance?</h3>
                <p className="mt-1 text-white/90">Secure, fast and reliable — built for academic institutions.</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-blue-700 font-medium shadow hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white/80">
                  Get Started
                </a>
                <a href="#" className="inline-flex items-center rounded-lg bg-blue-500/30 px-5 py-2.5 text-white font-medium shadow-inner hover:bg-blue-500/40 focus:outline-none focus:ring-2 focus:ring-white/60">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Attendia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-slate-900 dark:hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
