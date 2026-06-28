import { useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

import { useTasks } from "../../context/TaskContext";

import SkeletonCard from "../ui/SkeletonCard";
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

  // ===========================
  // Handlers
  // ===========================

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

  // ===========================
  // Filters
  // ===========================

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || task.status === status;

      const matchesPriority =
        priority === "All" || task.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [tasks, search, status, priority]);

  // ===========================
  // Skeleton Loading
  // ===========================

  if (loading) {
    return (
      <div className="mt-12">

        <div className="mb-10">

          <div className="h-5 w-40 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />

          <div className="mt-4 h-10 w-72 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />

          <div className="mt-4 h-5 w-96 rounded bg-slate-200 dark:bg-slate-700 animate-pulse" />

        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}

        </div>

      </div>
    );
  }

  return (
    <>
      <motion.section
        className="mt-12"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8 mb-10">

          <div>

            <span className="uppercase tracking-widest text-blue-600 text-sm font-semibold">
              Task Workspace
            </span>

            <h2 className="mt-2 text-4xl font-bold text-slate-900 dark:text-white">
              Today's Tasks
            </h2>

            <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
              Organize, prioritize and manage all your daily work efficiently.
            </p>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              {filteredTasks.length} active task
              {filteredTasks.length !== 1 && "s"}
            </p>

          </div>

          <button
            onClick={handleAddTask}
            className="
              flex
              items-center
              justify-center
              gap-2

              rounded-2xl

              bg-gradient-to-r
              from-blue-600
              to-violet-600

              px-7
              py-4

              font-semibold
              text-white

              shadow-xl

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-2xl

              active:scale-95
            "
          >
            <Plus size={20} />
            Add New Task
          </button>

        </div>

        {/* Search & Filters */}

        <div
          className="
            mb-10

            rounded-3xl

            bg-white
            dark:bg-slate-900

            border
            border-slate-200
            dark:border-slate-700

            shadow-lg

            p-6

            transition-all
            duration-300
          "
        >
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

        {/* Tasks */}

        {filteredTasks.length === 0 ? (

          <div className="mt-12">
            <EmptyState />
          </div>

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

      </motion.section>

      {/* Add / Edit Modal */}

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