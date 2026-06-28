import Layout from "../components/layout/Layout";
import { UserCircle2, Bell, Moon, Info } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

function Settings() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <Layout>
      <div className="p-8">

        {/* Header */}

        <div className="mb-10">

          <span className="uppercase tracking-wider text-blue-600 text-sm font-semibold">
            Settings
          </span>

          <h1 className="text-4xl font-bold text-slate-800 mt-2">
            Application Settings
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Manage your preferences and application settings.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Profile */}

          <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6">

            <div className="flex items-center gap-3 mb-5">

              <UserCircle2 className="text-blue-600" />

              <h2 className="text-xl font-bold">
                Profile
              </h2>

            </div>

            <p className="font-semibold">
              Ashutosh Kumar
            </p>

            <p className="text-gray-500">
              Software Engineer
            </p>

          </div>

          {/* Theme */}

          <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Moon className="text-yellow-500" />

                <div>

                  <h2 className="font-bold">
                    Dark Mode
                  </h2>

                  <p className="text-sm text-gray-500">
                    Toggle application theme
                  </p>

                </div>

              </div>

              <button
                onClick={toggleTheme}
                className={`px-5 py-2 rounded-xl font-semibold transition ${
                  darkMode
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200"
                }`}
              >
                {darkMode ? "ON" : "OFF"}
              </button>

            </div>

          </div>

          {/* Notifications */}

          <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6">

            <div className="flex items-center gap-3 mb-3">

              <Bell className="text-blue-600" />

              <h2 className="font-bold">
                Notifications
              </h2>

            </div>

            <p className="text-gray-500">
              Notification preferences will be available in a future update.
            </p>

          </div>

          {/* About */}

          <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6">

            <div className="flex items-center gap-3 mb-3">

              <Info className="text-blue-600" />

              <h2 className="font-bold">
                About
              </h2>

            </div>

            <p className="text-gray-600">
              <strong>TaskFlow Pro</strong>
            </p>

            <p className="text-gray-500 mt-2">
              Version 1.0.0
            </p>

            <p className="text-gray-500">
              Built using MERN Stack + Tailwind CSS.
            </p>

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Settings;