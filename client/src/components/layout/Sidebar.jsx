import {
  LayoutDashboard,
  CheckSquare,
  BarChart3,
  CalendarDays,
  Settings,
  Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      className="
        w-72
        min-h-screen

        flex
        flex-col

        bg-white
        dark:bg-slate-950

        border-r
        border-slate-200
        dark:border-slate-800

        transition-colors
        duration-300
      "
    >
      {/* Logo */}

      <div className="px-8 pt-8 pb-6">

        <div className="flex items-center gap-4">

          <div
            className="
              w-14
              h-14

              rounded-2xl

              bg-gradient-to-r
              from-blue-600
              to-violet-600

              flex
              items-center
              justify-center

              text-white
            "
          >
            <Sparkles size={24} />
          </div>

          <div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              TaskFlow
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400">
              Productivity Workspace
            </p>

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="mx-8 border-b border-slate-200 dark:border-slate-800" />

      {/* Navigation */}

      <nav className="flex-1 px-5 py-6 space-y-2">

        <SidebarItem
          to="/"
          end
          icon={<LayoutDashboard size={20} />}
          title="Dashboard"
        />

        <SidebarItem
          to="/tasks"
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

      {/* Footer */}

      <div
        className="
          p-6
          border-t
          border-slate-200
          dark:border-slate-800
        "
      >
        <div
          className="
            rounded-2xl

            bg-gradient-to-r
            from-blue-600
            to-violet-600

            p-4

            text-white
          "
        >
          <p className="text-xs uppercase tracking-wider opacity-80">
            Version
          </p>

          <h3 className="mt-1 font-bold text-lg">
            TaskFlow Pro
          </h3>

          <p className="text-sm opacity-90 mt-1">
            v1.0.0
          </p>
        </div>
      </div>

    </aside>
  );
}

function SidebarItem({ icon, title, to, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `
        group

        relative

        flex
        items-center

        gap-4

        px-5
        py-4

        rounded-2xl

        font-semibold

        transition-all
        duration-300

        ${
          isActive
            ? `
              bg-gradient-to-r
              from-blue-600
              to-violet-600

              text-white

              shadow-lg
            `
            : `
              text-slate-700
              dark:text-slate-300

              hover:bg-slate-100
              dark:hover:bg-slate-800

              hover:translate-x-1
            `
        }
      `
      }
    >
      {icon}

      <span>{title}</span>

    </NavLink>
  );
}

export default Sidebar;