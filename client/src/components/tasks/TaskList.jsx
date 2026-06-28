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

  // ======================
  // Handlers
  // ======================

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

  // ======================
  // Filtering
  // ======================

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

  // ======================
  // Loading
  // ======================

  if (loading) {
    return (
      <div className="mt-12">

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
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mt-10"
      >

        {/* =============================== */}
        {/* Header */}
        {/* =============================== */}

        <div className="mb-8">

          <div
  className="
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-blue-500/20
    bg-blue-500/10
    backdrop-blur-md
    px-5
    py-2
  "
>

            <span className="text-lg">📋</span>

            <span className="uppercase tracking-[0.22em] text-sm font-semibold text-blue-400">
              Task Workspace
            </span>

          </div>

          <div className="mt-6 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8">

            <div>

              <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                Today's Tasks
              </h1>

              <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
                Organize deadlines, prioritize work and stay productive with one
                smart workspace.
              </p>

              {/* Stats */}

              <div className="mt-6 flex flex-wrap items-center gap-8">

                <div>

                  <h3 className="text-3xl font-bold text-blue-500">
                    {filteredTasks.length}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Active Tasks
                  </p>

                </div>

               <div className="h-10 w-px bg-slate-300 dark:bg-slate-700" />

                <div>

                  <h3 className="text-3xl font-bold text-green-500">
                    {
                      tasks.filter(
                        (task) =>
                          task.status === "Completed"
                      ).length
                    }
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Completed
                  </p>

                </div>

                <div className="h-10 w-px bg-slate-300 dark:bg-slate-700" />

                <div>

                  <h3 className="text-3xl font-bold text-red-500">
                    {
                      tasks.filter(
                        (task) =>
                          task.priority === "High"
                      ).length
                    }
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    High Priority
                  </p>

                </div>

              </div>

            </div>

            <button
  onClick={handleAddTask}
  className="
    group
    flex
    items-center
    gap-3

    rounded-2xl

    bg-gradient-to-r
    from-blue-600
    to-violet-600

    px-8
    py-4

    font-semibold
    text-white

    shadow-xl
    dark:shadow-[0_15px_35px_rgba(59,130,246,.25)]

    transition-all
    duration-300

    hover:-translate-y-1
    hover:scale-[1.02]
    hover:shadow-blue-500/30
  "
>
  <Plus
    size={22}
    className="transition duration-300 group-hover:rotate-90"
  />

  Add New Task
</button>

          </div>

        </div>

        {/* =============================== */}
        {/* Search Toolbar */}
        {/* =============================== */}

        <div className="mb-8">

          <div
  className="
    rounded-3xl
    border
    border-slate-200
    dark:border-slate-700/60

    bg-white
    dark:bg-slate-800

    backdrop-blur-xl

    shadow-lg
    dark:shadow-[0_15px_35px_rgba(15,23,42,.35)]

    p-6
  "
>

            <div className="flex flex-col xl:flex-row xl:items-center gap-5">

              <SearchBar
                value={search}
                onChange={setSearch}
              />

              <div className="flex flex-wrap items-center gap-5">

                <div
  className="
    rounded-xl
    bg-slate-100
    dark:bg-slate-700

    px-4
    py-3

    text-sm
    font-medium

    text-slate-600
    dark:text-slate-300
  "
>


                  Showing

                  <span className="mx-2 font-bold text-slate-900 dark:text-white">
                    {filteredTasks.length}
                  </span>

                  task
                  {filteredTasks.length !== 1 && "s"}

                </div>

                <FilterBar
                  status={status}
                  setStatus={setStatus}
                  priority={priority}
                  setPriority={setPriority}
                />

              </div>

            </div>

          </div>

        </div>

        {/* =============================== */}
        {/* Tasks */}
        {/* =============================== */}

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

      </motion.section>

      {/* Add/Edit */}

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
      />

      {/* Delete */}

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