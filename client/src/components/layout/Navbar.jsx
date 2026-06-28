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
    <header
      className="
        sticky
        top-0
        z-50

        h-20

        px-8

        flex
        items-center
        justify-between

        backdrop-blur-xl

        bg-white/75
        dark:bg-slate-900/75

        border-b
        border-slate-200
        dark:border-slate-800

        transition-all
        duration-300
      "
    >
      {/* Logo */}

      <div>

        <h1
          className="
            text-3xl
            font-extrabold

            bg-gradient-to-r
            from-blue-600
            via-indigo-600
            to-violet-600

            bg-clip-text
            text-transparent
          "
        >
          TaskFlow Pro
        </h1>

        <p
          className="
            text-sm
            mt-1

            text-slate-500
            dark:text-slate-400
          "
        >
          Smart Productivity Workspace
        </p>

      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4">

        {/* Notification */}

        <button
          className="
            relative

            w-12
            h-12

            rounded-2xl

            flex
            items-center
            justify-center

            bg-slate-100
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            hover:bg-blue-100
            dark:hover:bg-slate-700

            hover:scale-105

            shadow-md

            transition-all
            duration-300
          "
        >
          <Bell
            size={20}
            className="
              text-slate-700
              dark:text-white
            "
          />

          {/* Notification Dot */}

          <span
            className="
              absolute

              top-2
              right-2

              w-2.5
              h-2.5

              rounded-full

              bg-red-500

              animate-pulse
            "
          />
        </button>

        {/* Theme Toggle */}

        <button
          onClick={toggleTheme}
          className={`
            w-12
            h-12

            rounded-2xl

            flex
            items-center
            justify-center

            border

            shadow-md

            hover:scale-105

            transition-all
            duration-300

            ${
              darkMode
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700"
                : "bg-slate-100 border-slate-200 hover:bg-yellow-100"
            }
          `}
        >
          {darkMode ? (
            <Sun
              size={21}
              className="text-yellow-400"
            />
          ) : (
            <Moon
              size={21}
              className="text-slate-700"
            />
          )}
        </button>

        {/* Profile */}

        <button
          className="
            flex
            items-center
            gap-3

            px-4
            py-2

            rounded-2xl

            bg-slate-100
            dark:bg-slate-800

            border
            border-slate-200
            dark:border-slate-700

            hover:shadow-lg
            hover:scale-[1.02]

            transition-all
            duration-300
          "
        >
          <div
            className="
              w-10
              h-10

              rounded-full

              bg-gradient-to-r
              from-blue-600
              to-violet-600

              flex
              items-center
              justify-center

              text-white
            "
          >
            <UserCircle2 size={24} />
          </div>

          <div className="hidden lg:block text-left">

            <h3
              className="
                text-sm
                font-bold

                text-slate-800
                dark:text-white
              "
            >
              Ashutosh
            </h3>

            <p
              className="
                text-xs

                text-slate-500
                dark:text-slate-400
              "
            >
              Full Stack Developer
            </p>

          </div>

        </button>

      </div>

    </header>
  );
}

export default Navbar;