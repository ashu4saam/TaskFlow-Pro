import { Calendar, Pencil, Trash2 } from "lucide-react";

function TaskCard({ task }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">

      <div className="flex justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {task.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {task.description}
          </p>

        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {task.priority}
        </span>

      </div>

      <div className="flex justify-between items-center mt-6">

        <div className="flex items-center gap-2 text-gray-500">

          <Calendar size={18} />

          {new Date(task.dueDate).toLocaleDateString()}

        </div>

        <div className="flex gap-4">

          <Pencil
            className="cursor-pointer text-blue-600"
            size={18}
          />

          <Trash2
            className="cursor-pointer text-red-600"
            size={18}
          />

        </div>

      </div>

    </div>
  );
}

export default TaskCard;