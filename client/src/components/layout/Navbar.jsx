import { Bell, Moon, UserCircle2 } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-white/90 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8">

      {/* Logo */}

      <div>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
          TaskFlow Pro
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Smart Task Management Dashboard
        </p>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-5">

        <button
          className="h-11 w-11 rounded-xl bg-slate-100 hover:bg-blue-100 transition flex items-center justify-center"
        >
          <Bell
            size={20}
            className="text-slate-700"
          />
        </button>

        <button
          className="h-11 w-11 rounded-xl bg-slate-100 hover:bg-yellow-100 transition flex items-center justify-center"
        >
          <Moon
            size={20}
            className="text-slate-700"
          />
        </button>

        <button
          className="flex items-center gap-3 bg-slate-100 hover:bg-slate-200 transition px-3 py-2 rounded-xl"
        >
          <UserCircle2
            size={34}
            className="text-slate-700"
          />

          <div className="hidden lg:block text-left">

            <h3 className="text-sm font-semibold text-slate-800">
              Ashutosh
            </h3>

            <p className="text-xs text-slate-500">
              Software Engineer
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}

export default Navbar;