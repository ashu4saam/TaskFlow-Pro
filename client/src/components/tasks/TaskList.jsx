import { useTasks } from "../../context/TaskContext";
import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

function TaskList() {
  const { tasks, loading } = useTasks();

  if (loading) {
    return (
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-lg">Loading tasks...</p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Today's Tasks
          </h2>

          <p className="text-gray-500 mt-1">
            You have {tasks.length} active task{tasks.length > 1 ? "s" : ""}.
          </p>
        </div>

        <button
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
        >
          + Add New Task
        </button>
      </div>

      {/* Task Grid */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;