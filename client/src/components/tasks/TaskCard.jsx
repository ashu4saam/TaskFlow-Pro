import { Calendar, Pencil, Trash2 } from "lucide-react";
import dayjs from "dayjs";
import { motion } from "framer-motion";

function TaskCard({ task, onEdit, onDelete }) {
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

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400";

      default:
        return "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-300";
    }
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{ duration: 0.25 }}
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        border
        border-slate-200
        dark:border-slate-700
        p-6
        transition-all
        duration-300
      "
    >
      {/* Header */}

      <div className="flex justify-between items-start gap-4">

        <div className="flex-1">

          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            {task.title}
          </h2>

          <p className="mt-3 leading-relaxed text-slate-500 dark:text-slate-400">
            {task.description}
          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>

      </div>

      {/* Status */}

      <div className="mt-5">

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
            task.status
          )}`}
        >
          {task.status}
        </span>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">

          <Calendar size={18} />

          <span className="text-sm">
            {dayjs(task.dueDate).format("DD MMM YYYY")}
          </span>

        </div>

        <div className="flex gap-3">

          <button
            onClick={() => onEdit(task)}
            className="
              p-2
              rounded-xl
              hover:bg-blue-100
              dark:hover:bg-blue-900/30
              transition
            "
          >
            <Pencil
              size={18}
              className="text-blue-600 dark:text-blue-400"
            />
          </button>

          <button
            onClick={() => onDelete(task)}
            className="
              p-2
              rounded-xl
              hover:bg-red-100
              dark:hover:bg-red-900/30
              transition
            "
          >
            <Trash2
              size={18}
              className="text-red-600 dark:text-red-400"
            />
          </button>

        </div>

      </div>
    </motion.div>
  );
}

export default TaskCard;