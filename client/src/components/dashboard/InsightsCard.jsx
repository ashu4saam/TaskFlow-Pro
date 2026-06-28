import { AlertTriangle, CalendarClock } from "lucide-react";
import dayjs from "dayjs";
import { useTasks } from "../../context/TaskContext";

function InsightsCard() {
  const { tasks } = useTasks();

  const today = dayjs();

  const dueToday = tasks.filter(
    (task) =>
      dayjs(task.dueDate).isSame(today, "day") &&
      task.status !== "Completed"
  ).length;

  const overdue = tasks.filter(
    (task) =>
      dayjs(task.dueDate).isBefore(today, "day") &&
      task.status !== "Completed"
  ).length;

  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 shadow-lg">

      <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white">
        Task Insights
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <CalendarClock className="text-blue-500" />

            <span className="text-slate-600 dark:text-slate-300">
              Due Today
            </span>

          </div>

          <span className="text-2xl font-bold text-blue-600">
            {dueToday}
          </span>

        </div>

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <AlertTriangle className="text-red-500" />

            <span className="text-slate-600 dark:text-slate-300">
              Overdue
            </span>

          </div>

          <span className="text-2xl font-bold text-red-600">
            {overdue}
          </span>

        </div>

      </div>

    </div>
  );
}

export default InsightsCard;