import { useState } from 'react';
import { Menu, X, Home, UserCircle2, BarChart3, Settings } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'Dashboards', icon: BarChart3 },
    { name: 'Users', icon: UserCircle2 },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/70 border-b border-slate-200/60 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-inner" />
            <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Attendia</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ name, icon: Icon }) => (
              <a key={name} href="#" className="group inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{name}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition">
              Sign in
            </button>
            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="mt-2 space-y-1 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 shadow-sm">
              {navItems.map(({ name }) => (
                <a
                  key={name}
                  href="#"
                  className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {name}
                </a>
              ))}
              <a href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800">
                Sign in
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
