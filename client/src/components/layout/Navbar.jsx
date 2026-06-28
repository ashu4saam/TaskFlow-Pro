import {
  Bell,
  Moon,
  Sun,
  UserCircle2,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 h-20
      bg-white/90 dark:bg-slate-900/90
      backdrop-blur-md
      border-b border-slate-200 dark:border-slate-700
      flex items-center justify-between px-8
      transition-colors duration-300">

      {/* Logo */}

      <div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          TaskFlow Pro
        </h1>

        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Smart Task Management Dashboard
        </p>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        {/* Notification */}

        <button
          className="h-11 w-11 rounded-xl
          bg-slate-100 dark:bg-slate-800
          hover:bg-blue-100 dark:hover:bg-slate-700
          transition flex items-center justify-center"
        >
          <Bell
            size={20}
            className="text-slate-700 dark:text-white"
          />
        </button>

        {/* Theme Toggle */}

        <button
          onClick={toggleTheme}
          className="h-11 w-11 rounded-xl
          bg-slate-100 dark:bg-slate-800
          hover:bg-yellow-100 dark:hover:bg-slate-700
          transition flex items-center justify-center"
        >
          {darkMode ? (
            <Sun
              size={20}
              className="text-yellow-400"
            />
          ) : (
            <Moon
              size={20}
              className="text-slate-700"
            />
          )}
        </button>

        {/* Profile */}

        <button
          className="flex items-center gap-3
          bg-slate-100 dark:bg-slate-800
          hover:bg-slate-200 dark:hover:bg-slate-700
          transition px-3 py-2 rounded-xl"
        >
          <UserCircle2
            size={34}
            className="text-slate-700 dark:text-white"
          />

          <div className="hidden lg:block text-left">

            <h3 className="text-sm font-semibold text-slate-800 dark:text-white">
              Ashutosh
            </h3>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Developer
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}

export default Navbar;