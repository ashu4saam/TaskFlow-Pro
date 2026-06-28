import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import dayjs from "dayjs";

import { useTasks } from "../../context/TaskContext";

function RecentTasks() {
  const { tasks } = useTasks();

  const recentTasks = [...tasks]
    .sort(
      (a, b) =>
        new Date(b.createdAt || b.dueDate) -
        new Date(a.createdAt || a.dueDate)
    )
    .slice(0, 5);

  const priorityColor = {
    High: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    Medium:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
    Low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  };

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-lg p-6">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Recent Tasks
          </h2>

          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Your latest task activity
          </p>

        </div>

        <Link
          to="/tasks"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          View All
          <ArrowRight size={18} />
        </Link>

      </div>

      {/* List */}

      {recentTasks.length === 0 ? (

        <div className="py-12 text-center">

          <p className="text-slate-500 dark:text-slate-400">
            No tasks available.
          </p>

        </div>

      ) : (

        <div className="space-y-4">

          {recentTasks.map((task) => (

            <div
              key={task._id}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition"
            >

              <div className="flex justify-between items-start gap-4">

                <div className="flex-1">

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {task.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                    {task.description}
                  </p>

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    priorityColor[task.priority]
                  }`}
                >
                  {task.priority}
                </span>

              </div>

              <div className="mt-4 flex justify-between items-center">

                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">

                  <Calendar size={16} />

                  {dayjs(task.dueDate).format("DD MMM YYYY")}

                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
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
  );
}

export default RecentTasks;