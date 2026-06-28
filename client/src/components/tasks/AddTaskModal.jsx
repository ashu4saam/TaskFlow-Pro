import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TaskForm from "./TaskForm";

function AddTaskModal({ isOpen, onClose, task }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              w-full
              max-w-2xl
              overflow-hidden
              rounded-3xl

              border
              border-slate-200
              dark:border-slate-700

              bg-white
              dark:bg-slate-900

              shadow-2xl
            "
          >
            {/* Header */}

            <div
              className="
                flex
                items-center
                justify-between

                border-b
                border-slate-200
                dark:border-slate-700

                px-8
                py-6
              "
            >
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {task ? "Edit Task" : "Add New Task"}
                </h2>

                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  {task
                    ? "Update your task details."
                    : "Create a new task for your dashboard."}
                </p>
              </div>

              <button
                onClick={onClose}
                className="
                  rounded-xl
                  p-2

                  text-slate-500
                  dark:text-slate-300

                  hover:bg-slate-100
                  dark:hover:bg-slate-800

                  transition
                "
              >
                <X size={22} />
              </button>
            </div>

            {/* Form */}

            <div
              className="
                bg-white
                dark:bg-slate-900
                p-8
              "
            >
              <TaskForm
                task={task}
                onClose={onClose}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AddTaskModal;