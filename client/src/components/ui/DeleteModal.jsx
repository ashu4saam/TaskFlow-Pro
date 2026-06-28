import { motion, AnimatePresence } from "framer-motion";
import { Trash2 } from "lucide-react";

function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  taskTitle,
}) {
  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            initial={{ scale: .9 }}
            animate={{ scale: 1 }}
            exit={{ scale: .9 }}
            transition={{ duration: .2 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >

            <div className="flex justify-center">

              <div className="bg-red-100 p-4 rounded-full">

                <Trash2
                  className="text-red-600"
                  size={32}
                />

              </div>

            </div>

            <h2 className="text-2xl font-bold text-center mt-6">
              Delete Task
            </h2>

            <p className="text-center text-gray-500 mt-3">

              Are you sure you want to delete

              <span className="font-semibold text-slate-800">
                {" "}
                "{taskTitle}"
              </span>

              ?

            </p>

            <p className="text-center text-sm text-red-500 mt-3">

              This action cannot be undone.

            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <button
                onClick={onConfirm}
                className="flex-1 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition"
              >
                Delete
              </button>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default DeleteModal;