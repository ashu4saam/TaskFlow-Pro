import { Calendar, Pencil, Trash2 } from "lucide-react";
import dayjs from "dayjs";

function TaskCard({ task, onEdit, onDelete }) {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      case "Low":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">

      {/* Header */}
      <div className="flex justify-between gap-4">

        <div className="flex-1">

          <h2 className="text-xl font-bold text-slate-800">
            {task.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {task.description}
          </p>

          {/* Status */}
          <div className="mt-3">
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                task.status === "Completed"
                  ? "bg-green-100 text-green-700"
                  : "bg-orange-100 text-orange-700"
              }`}
            >
              {task.status}
            </span>
          </div>

        </div>

        {/* Priority */}
        <span
          className={`h-fit px-3 py-1 rounded-full text-sm font-semibold ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>

      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-6">

        <div className="flex items-center gap-2 text-gray-500">

          <Calendar size={18} />

          <span>
            {dayjs(task.dueDate).format("DD MMM YYYY")}
          </span>

        </div>

        <div className="flex gap-5">

          <Pencil
            size={18}
            onClick={() => onEdit(task)}
            className="cursor-pointer text-blue-600 hover:text-blue-800 transition"
          />

          <Trash2
            size={18}
            onClick={() => onDelete(task._id)}
            className="cursor-pointer text-red-600 hover:text-red-800 transition"
          />

        </div>

      </div>

    </div>
  );
}

export default TaskCard;