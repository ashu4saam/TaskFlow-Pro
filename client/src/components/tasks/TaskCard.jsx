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

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-600";
      default:
        return "bg-orange-100 text-orange-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6">

      <div className="flex justify-between items-start">

        <div className="flex-1">

          <h2 className="text-xl font-bold text-slate-800">
            {task.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {task.description}
          </p>

        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(
            task.priority
          )}`}
        >
          {task.priority}
        </span>

      </div>

      <div className="mt-5 flex items-center gap-3">

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
            task.status
          )}`}
        >
          {task.status}
        </span>

      </div>

      <div className="mt-6 flex justify-between items-center">

        <div className="flex items-center gap-2 text-gray-500">

          <Calendar size={18} />

          <span>
            {dayjs(task.dueDate).format("DD MMM YYYY")}
          </span>

        </div>

        <div className="flex gap-4">

          <button onClick={() => onEdit(task)}>
            <Pencil
              size={18}
              className="text-blue-600 hover:text-blue-800 transition"
            />
          </button>

          <button onClick={() => onDelete(task._id)}>
            <Trash2
              size={18}
              className="text-red-600 hover:text-red-800 transition"
            />
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;