import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";

import { useTasks } from "../../context/TaskContext";

import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";
import AddTaskModal from "./AddTaskModal";
import DeleteModal from "../ui/DeleteModal";

import SearchBar from "../dashboard/SearchBar";
import FilterBar from "../dashboard/FilterBar";

function TaskList() {
  const { tasks, loading, removeTask } = useTasks();

  // Search & Filter
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);

  // ------------------------
  // Handlers
  // ------------------------

  const handleAddTask = () => {
    setSelectedTask(null);
    setIsModalOpen(true);
  };

  const handleEdit = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleDelete = (task) => {
    setSelectedTask(task);
    setIsDeleteOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedTask) return;

    try {
      await removeTask(selectedTask._id);

      toast.success("Task deleted successfully");

      setIsDeleteOpen(false);
      setSelectedTask(null);

    } catch {
      toast.error("Failed to delete task");
    }
  };

  // ------------------------
  // Search + Filters
  // ------------------------

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || task.status === status;

      const matchesPriority =
        priority === "All" || task.priority === priority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [tasks, search, status, priority]);

  // ------------------------

  if (loading) {
    return (
      <div className="mt-16 flex justify-center">
        <p className="animate-pulse text-lg text-slate-500">
          Loading your workspace...
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="mt-12">

        {/* ================================= */}
        {/* Header */}
        {/* ================================= */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-10">

          <div>

            <span className="uppercase tracking-wider text-blue-600 text-sm font-semibold">
              Task Workspace
            </span>

            <h2 className="text-4xl font-bold text-slate-800 mt-2">
              Today's Tasks
            </h2>

            <p className="text-slate-500 text-lg mt-3">
              Organize, prioritize and manage all your daily work efficiently.
            </p>

            <p className="mt-4 text-sm text-slate-400">
              {filteredTasks.length} active task
              {filteredTasks.length !== 1 && "s"}
            </p>

          </div>

          <button
            onClick={handleAddTask}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:scale-105 transition-all duration-300 px-7 py-4 rounded-2xl text-white font-semibold shadow-xl"
          >
            <Plus size={20} />
            Add New Task
          </button>

        </div>

        {/* ================================= */}
        {/* Search & Filters */}
        {/* ================================= */}

        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 mb-10">

          <div className="grid lg:grid-cols-3 gap-6">

            <div className="lg:col-span-2">

              <SearchBar
                value={search}
                onChange={setSearch}
              />

            </div>

            <FilterBar
              status={status}
              setStatus={setStatus}
              priority={priority}
              setPriority={setPriority}
            />

          </div>

        </div>

        {/* ================================= */}
        {/* Tasks */}
        {/* ================================= */}

        {filteredTasks.length === 0 ? (

          <EmptyState />

        ) : (

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

            {filteredTasks.map((task) => (

              <TaskCard
                key={task._id}
                task={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />

            ))}

          </div>

        )}

      </section>

      {/* Add/Edit Modal */}

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
      />

      {/* Delete Modal */}

      <DeleteModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={confirmDelete}
        taskTitle={selectedTask?.title}
      />
    </>
  );
}

export default TaskList;