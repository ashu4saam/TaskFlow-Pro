import { useState } from "react";

import { useTasks } from "../../context/TaskContext";

import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";
import AddTaskModal from "./AddTaskModal";

function TaskList() {
  const { tasks, loading, removeTask } = useTasks();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this task permanently?"
    );

    if (!confirmDelete) return;

    await removeTask(id);
  };

  if (loading) {
    return (
      <div className="mt-10 text-center">
        Loading Tasks...
      </div>
    );
  }

  return (
    <>
      <div className="mt-10">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-3xl font-bold">
              Today's Tasks
            </h2>

            <p className="text-gray-500 mt-1">
              {tasks.length} Active Task
              {tasks.length !== 1 && "s"}
            </p>

          </div>

          <button
            onClick={handleAddTask}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            + Add New Task
          </button>

        </div>

        {tasks.length === 0 ? (
          <EmptyState />
        ) : (
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
        )}

      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
      />
    </>
  );
}

export default TaskList;