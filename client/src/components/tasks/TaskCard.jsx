import {
  Calendar,
  Pencil,
  Trash2,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";
import dayjs from "dayjs";

function TaskCard({ task, onEdit, onDelete }) {
  const priority = {
    High: {
      bg: "bg-red-50 dark:bg-red-900/20",
      text: "text-red-600 dark:text-red-400",
    },
    Medium: {
      bg: "bg-yellow-50 dark:bg-yellow-900/20",
      text: "text-yellow-600 dark:text-yellow-400",
    },
    Low: {
      bg: "bg-green-50 dark:bg-green-900/20",
      text: "text-green-600 dark:text-green-400",
    },
  };

  const status = {
    Completed: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-400",
    },
    Pending: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-600 dark:text-orange-400",
    },
  };

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group

        overflow-hidden

        rounded-3xl

        bg-white
        dark:bg-slate-900

        border
        border-slate-200
        dark:border-slate-700

        shadow-md
        hover:shadow-2xl

        transition-all
        duration-300
      "
    >
      {/* Top Accent */}

      <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600" />

      <div className="p-6">

        {/* Header */}

        <div className="flex justify-between items-start gap-4">

          <div className="flex-1">

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {task.title}
            </h2>

            <p className="mt-3 text-slate-500 dark:text-slate-400 leading-7 line-clamp-3">
              {task.description}
            </p>

          </div>

          <button
            className="
              opacity-0

              group-hover:opacity-100

              transition
            "
          >
            <ArrowUpRight
              size={18}
              className="text-slate-400"
            />
          </button>

        </div>

        {/* Badges */}

        <div className="mt-6 flex flex-wrap gap-3">

          <span
            className={`
              px-3
              py-1.5

              rounded-full

              text-xs
              font-semibold

              ${priority[task.priority].bg}
              ${priority[task.priority].text}
            `}
          >
            {task.priority}
          </span>

          <span
            className={`
              px-3
              py-1.5

              rounded-full

              text-xs
              font-semibold

              ${status[task.status].bg}
              ${status[task.status].text}
            `}
          >
            {task.status}
          </span>

        </div>

        {/* Divider */}

        <div className="my-6 border-t border-slate-200 dark:border-slate-700" />

        {/* Footer */}

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">

            <Calendar size={16} />

            <span className="text-sm">
              {dayjs(task.dueDate).format("DD MMM YYYY")}
            </span>

          </div>

          <div className="flex gap-2">

            <button
              onClick={() => onEdit(task)}
              className="
                h-10
                w-10

                rounded-xl

                flex
                items-center
                justify-center

                text-slate-500

                hover:bg-blue-50
                hover:text-blue-600

                dark:hover:bg-slate-800

                transition
              "
            >
              <Pencil size={18} />
            </button>

            <button
              onClick={() => onDelete(task)}
              className="
                h-10
                w-10

                rounded-xl

                flex
                items-center
                justify-center

                text-slate-500

                hover:bg-red-50
                hover:text-red-600

                dark:hover:bg-slate-800

                transition
              "
            >
              <Trash2 size={18} />
            </button>

          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default TaskCard;