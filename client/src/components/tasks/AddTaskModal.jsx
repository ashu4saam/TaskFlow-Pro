import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import TaskForm from "./TaskForm";

function AddTaskModal({ isOpen, onClose, task }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl"
          >
            {/* Header */}

            <div className="flex justify-between items-center border-b px-8 py-6">

              <div>

                <h2 className="text-2xl font-bold text-slate-800">
                  {task ? "Edit Task" : "Add New Task"}
                </h2>

                <p className="text-gray-500 mt-1">
                  {task
                    ? "Update your task details."
                    : "Create a new task for your dashboard."}
                </p>

              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <X />
              </button>

            </div>

            {/* Form */}

            <div className="p-8">

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