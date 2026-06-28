import { Bell, Search, Moon, UserCircle2 } from "lucide-react";

function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between sticky top-0 z-50">

      {/* Logo */}

      <div>
        <h1 className="text-2xl font-bold text-blue-600">
          TaskFlow Pro
        </h1>

        <p className="text-sm text-gray-500">
          Smart Task Management
        </p>
      </div>

      {/* Search */}

      <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-[420px]">

        <Search size={18} className="text-gray-500"/>

        <input
          type="text"
          placeholder="Search tasks..."
          className="bg-transparent ml-3 outline-none w-full"
        />

      </div>

      {/* Icons */}

      <div className="flex items-center gap-6">

        <Bell
          className="cursor-pointer hover:text-blue-600 transition"
          size={22}
        />

        <Moon
          className="cursor-pointer hover:text-blue-600 transition"
          size={22}
        />

        <UserCircle2
          className="cursor-pointer hover:text-blue-600 transition"
          size={34}
        />

      </div>

    </header>
  );
}

export default Navbar;