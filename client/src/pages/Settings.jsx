import Layout from "../components/layout/Layout";
import {
  UserCircle2,
  Bell,
  Moon,
  Info,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className="p-8">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >

          <span className="uppercase tracking-[0.22em] text-blue-600 text-sm font-semibold">
            Settings
          </span>

          <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Application Settings
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Manage your preferences and personalize your TaskFlow
            workspace.
          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Profile */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700/60

              bg-white
              dark:bg-slate-800

              shadow-lg
              dark:shadow-[0_15px_35px_rgba(15,23,42,.35)]

              p-7
            "
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-100 dark:bg-blue-900/30 p-4">

                <UserCircle2
                  size={28}
                  className="text-blue-600 dark:text-blue-400"
                />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Profile
                </h2>

                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  User information
                </p>

              </div>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Ashutosh Kumar
              </h3>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Software Engineer
              </p>

            </div>

          </motion.div>

          {/* Theme */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700/60

              bg-white
              dark:bg-slate-800

              shadow-lg
              dark:shadow-[0_15px_35px_rgba(15,23,42,.35)]

              p-7
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-yellow-100 dark:bg-yellow-900/30 p-4">

                  <Moon
                    size={28}
                    className="text-yellow-600 dark:text-yellow-400"
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Dark Mode
                  </h2>

                  <p className="mt-1 text-slate-600 dark:text-slate-400">
                    Toggle application theme
                  </p>

                </div>

              </div>

              <button
                onClick={toggleTheme}
                className={`
                  rounded-2xl
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300

                  ${
                    darkMode
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-slate-300 text-slate-800 hover:bg-slate-400"
                  }
                `}
              >
                {darkMode ? "ON" : "OFF"}
              </button>

            </div>

          </motion.div>

          {/* Notifications */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700/60

              bg-white
              dark:bg-slate-800

              shadow-lg
              dark:shadow-[0_15px_35px_rgba(15,23,42,.35)]

              p-7
            "
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-blue-100 dark:bg-blue-900/30 p-4">

                <Bell
                  size={28}
                  className="text-blue-600 dark:text-blue-400"
                />

              </div>

              <div>

                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Notifications
                </h2>

                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  Coming soon
                </p>

              </div>

            </div>

            <p className="mt-8 text-slate-600 dark:text-slate-400">
              Notification preferences will be available in a future
              update.
            </p>

          </motion.div>

          {/* About */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700/60

              bg-white
              dark:bg-slate-800

              shadow-lg
              dark:shadow-[0_15px_35px_rgba(15,23,42,.35)]

              p-7
            "
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-blue-100 dark:bg-blue-900/30 p-4">

                  <Info
                    size={28}
                    className="text-blue-600 dark:text-blue-400"
                  />

                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    About
                  </h2>

                  <p className="mt-1 text-slate-500 dark:text-slate-400">
                    Application details
                  </p>

                </div>

              </div>

              <ChevronRight className="text-slate-400" />

            </div>

            <div className="mt-8 space-y-2">

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                TaskFlow Pro
              </h3>

              <p className="text-slate-600 dark:text-slate-400">
                Version 1.0.0
              </p>

              <p className="text-slate-600 dark:text-slate-400">
                Built using MERN Stack + Tailwind CSS.
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </Layout>
  );
}

export default Settings;