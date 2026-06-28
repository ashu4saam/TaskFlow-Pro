import { useState } from "react";

import { useTasks } from "../../context/TaskContext";

import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";
import AddTaskModal from "./AddTaskModal";

function TaskList() {
  const { tasks, loading } = useTasks();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Selected task for editing
  const [selectedTask, setSelectedTask] = useState(null);

  // Open Add Modal
  const handleAddTask = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  // Delete Task (Temporary)
  const handleDelete = (id) => {
    console.log("Delete Task:", id);

    // Backend integration will be added next
  };

  if (loading) {
    return (
      <div className="mt-10 text-center">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading tasks...
        </p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <>
        <div className="flex justify-end mb-6">
          <button
            onClick={handleAddTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            + Add New Task
          </button>
        </div>

        <EmptyState />

        <AddTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          task={selectedTask}
        />
      </>
    );
  }

  return (
    <>
      <div className="mt-10">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold text-slate-800">
              Today's Tasks
            </h2>

            <p className="text-gray-500 mt-2">
              You have {tasks.length} active task
              {tasks.length > 1 ? "s" : ""}.
            </p>

          </div>

          <button
            onClick={handleAddTask}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg hover:shadow-xl"
          >
            + Add New Task
          </button>

        </div>

        {/* Task Grid */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {tasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}

        </div>

      </div>

      {/* Add / Edit Modal */}

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
      />
    </>
  );
}

export default TaskList;