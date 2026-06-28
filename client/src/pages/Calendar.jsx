import Layout from "../components/layout/Layout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import dayjs from "dayjs";

import { CalendarDays } from "lucide-react";

import { useTasks } from "../context/TaskContext";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const { tasks } = useTasks();

  // Upcoming Tasks
  const upcomingTasks = useMemo(() => {
    return [...tasks]
      .filter((task) => task.dueDate)
      .sort(
        (a, b) =>
          new Date(a.dueDate) - new Date(b.dueDate)
      );
  }, [tasks]);

  // Selected Date Tasks
  const selectedDateTasks = useMemo(() => {
    return tasks.filter(
      (task) =>
        dayjs(task.dueDate).format("YYYY-MM-DD") ===
        dayjs(date).format("YYYY-MM-DD")
    );
  }, [tasks, date]);

  // Priority Badge
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";

      case "Medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300";

      case "Low":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

      default:
        return "bg-gray-100 text-gray-700 dark:bg-slate-700 dark:text-slate-300";
    }
  };

  // Calendar Dots
  const tileContent = ({ date, view }) => {
    if (view !== "month") return null;

    const task = tasks.find(
      (task) =>
        dayjs(task.dueDate).format("YYYY-MM-DD") ===
        dayjs(date).format("YYYY-MM-DD")
    );

    if (!task) return null;

    const color =
      task.priority === "High"
        ? "bg-red-500"
        : task.priority === "Medium"
        ? "bg-yellow-500"
        : "bg-green-500";

    return (
      <div className="flex justify-center mt-1">
        <div className={`w-2 h-2 rounded-full ${color}`} />
      </div>
    );
  };

  return (
    <Layout>
      <motion.div
        className="p-8"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}

        <div className="mb-10">

          <span className="uppercase tracking-widest text-blue-600 text-sm font-semibold">
            Calendar
          </span>

          <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
            Task Calendar
          </h1>

          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            View your schedule and upcoming task deadlines.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Calendar */}

          <div
            className="
              lg:col-span-2
              rounded-3xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              shadow-lg
              p-8
              transition-all
              duration-300
            "
          >
            <Calendar
              onChange={setDate}
              value={date}
              tileContent={tileContent}
            />

            {/* Selected Date */}

            <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-6">

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Selected Date
              </h2>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                {dayjs(date).format("DD MMMM YYYY")}
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6">

                <div className="rounded-2xl bg-blue-50 dark:bg-blue-900/20 p-4 text-center">

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Tasks
                  </p>

                  <h3 className="text-2xl font-bold text-blue-600">
                    {selectedDateTasks.length}
                  </h3>

                </div>

                <div className="rounded-2xl bg-green-50 dark:bg-green-900/20 p-4 text-center">

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Completed
                  </p>

                  <h3 className="text-2xl font-bold text-green-600">
                    {
                      selectedDateTasks.filter(
                        (t) => t.status === "Completed"
                      ).length
                    }
                  </h3>

                </div>

                <div className="rounded-2xl bg-orange-50 dark:bg-orange-900/20 p-4 text-center">

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Pending
                  </p>

                  <h3 className="text-2xl font-bold text-orange-600">
                    {
                      selectedDateTasks.filter(
                        (t) => t.status === "Pending"
                      ).length
                    }
                  </h3>

                </div>

              </div>

            </div>

          </div>

          {/* Upcoming Tasks */}

          <div
            className="
              rounded-3xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              shadow-lg
              p-6
              transition-all
              duration-300
            "
          >
            <div className="flex items-center gap-3 mb-6">

              <CalendarDays
                className="text-blue-600"
                size={22}
              />

              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Upcoming Tasks
              </h2>

            </div>

            {upcomingTasks.length === 0 ? (

              <p className="text-slate-500 dark:text-slate-400">
                No upcoming tasks.
              </p>

            ) : (

              <div className="space-y-4">

                {upcomingTasks.map((task) => (

                  <div
                    key={task._id}
                    className="
                      rounded-2xl
                      border
                      border-slate-200
                      dark:border-slate-700
                      bg-slate-50
                      dark:bg-slate-800
                      p-4
                      transition-all
                      duration-300
                      hover:shadow-lg
                    "
                  >
                    <div className="flex justify-between items-start">

                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {task.title}
                      </h3>

                      <span
                        className={`px-2 py-1 text-xs rounded-full ${getPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>

                    </div>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {task.description}
                    </p>

                    <div className="mt-4 flex justify-between items-center">

                      <span className="text-sm font-medium text-blue-600">
                        {dayjs(task.dueDate).format("DD MMM YYYY")}
                      </span>

                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          task.status === "Completed"
                            ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300"
                        }`}
                      >
                        {task.status}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </motion.div>
    </Layout>
  );
}

export default CalendarPage;