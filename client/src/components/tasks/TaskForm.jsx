import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useTasks } from "../../context/TaskContext";

function TaskForm({ task, onClose }) {
  const { addTask, editTask } = useTasks();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      priority: "Medium",
      status: "Pending",
      dueDate: "",
    },
  });

  // Fill form when editing
  useEffect(() => {
    if (task) {
      reset({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate?.substring(0, 10),
      });
    }
  }, [task, reset]);

  const onSubmit = async (data) => {
    try {
      if (task) {
        await editTask(task._id, data);
        toast.success("Task updated successfully");
      } else {
        await addTask(data);
        toast.success("Task created successfully");
      }

      reset();

      onClose();

    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Title */}

      <div>
        <label className="block mb-2 font-semibold">
          Task Title
        </label>

        <input
          type="text"
          placeholder="Enter task title"
          {...register("title", {
            required: "Task title is required",
          })}
          className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        {errors.title && (
          <p className="text-red-500 text-sm mt-1">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Description */}

      <div>
        <label className="block mb-2 font-semibold">
          Description
        </label>

        <textarea
          rows="4"
          placeholder="Task description..."
          {...register("description")}
          className="w-full border rounded-xl px-4 py-3 resize-none focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Priority */}

      <div className="grid grid-cols-2 gap-5">

        <div>
          <label className="block mb-2 font-semibold">
            Priority
          </label>

          <select
            {...register("priority")}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Status
          </label>

          <select
            {...register("status")}
            className="w-full border rounded-xl px-4 py-3"
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>

      </div>

      {/* Due Date */}

      <div>
        <label className="block mb-2 font-semibold">
          Due Date
        </label>

        <input
          type="date"
          {...register("dueDate", {
            required: "Please select a due date",
          })}
          className="w-full border rounded-xl px-4 py-3"
        />

        {errors.dueDate && (
          <p className="text-red-500 text-sm mt-1">
            {errors.dueDate.message}
          </p>
        )}
      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 pt-3">

        <button
          type="button"
          onClick={onClose}
          className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
        >
          Cancel
        </button>

        <button
          disabled={isSubmitting}
          type="submit"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition disabled:opacity-60"
        >
          {isSubmitting
            ? "Saving..."
            : task
            ? "Save Changes"
            : "Create Task"}
        </button>

      </div>

    </form>
  );
}

export default TaskForm;