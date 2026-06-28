import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  CalendarDays,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen p-8">

      {/* Logo */}

      <div>

        <h2 className="text-3xl font-bold text-blue-400">
          TaskFlow
        </h2>

        <p className="text-slate-400 mt-2 text-sm">
          Productivity Workspace
        </p>

      </div>

      {/* Navigation */}

      <nav className="space-y-3 mt-10">

        <SidebarItem
          to="/"
          icon={<LayoutDashboard size={20} />}
          title="Dashboard"
        />

        <SidebarItem
          to="/"
          icon={<CheckSquare size={20} />}
          title="Tasks"
        />

        <SidebarItem
          to="/analytics"
          icon={<BarChart3 size={20} />}
          title="Analytics"
        />

        <SidebarItem
          to="/calendar"
          icon={<CalendarDays size={20} />}
          title="Calendar"
        />

        <SidebarItem
          to="/settings"
          icon={<Settings size={20} />}
          title="Settings"
        />

      </nav>

    </aside>
  );
}

function SidebarItem({ icon, title, to }) {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
          isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "hover:bg-slate-800 text-slate-300"
        }`
      }
    >
      {icon}

      <span className="font-medium">
        {title}
      </span>
    </NavLink>
  );
}

export default Sidebar;