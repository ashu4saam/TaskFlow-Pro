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

  const inputClass = `
    w-full
    rounded-xl
    border
    border-slate-300
    dark:border-slate-700

    bg-white
    dark:bg-slate-800

    px-4
    py-3

    text-slate-900
    dark:text-white

    placeholder:text-slate-400
    dark:placeholder:text-slate-500

    outline-none
    transition-all

    focus:border-blue-500
    focus:ring-4
    focus:ring-blue-500/10
  `;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Title */}

      <div>
        <label className="mb-2 block font-semibold text-slate-800 dark:text-slate-200">
          Task Title
        </label>

        <input
          type="text"
          placeholder="Enter task title"
          {...register("title", {
            required: "Task title is required",
          })}
          className={inputClass}
        />

        {errors.title && (
          <p className="mt-1 text-sm text-red-500">
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Description */}

      <div>
        <label className="mb-2 block font-semibold text-slate-800 dark:text-slate-200">
          Description
        </label>

        <textarea
          rows="4"
          placeholder="Task description..."
          {...register("description")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Priority & Status */}

      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="mb-2 block font-semibold text-slate-800 dark:text-slate-200">
            Priority
          </label>

          <select
            {...register("priority")}
            className={inputClass}
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-800 dark:text-slate-200">
            Status
          </label>

          <select
            {...register("status")}
            className={inputClass}
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      {/* Due Date */}

      <div>
        <label className="mb-2 block font-semibold text-slate-800 dark:text-slate-200">
          Due Date
        </label>

        <input
          type="date"
          {...register("dueDate", {
            required: "Please select a due date",
          })}
          className={inputClass}
        />

        {errors.dueDate && (
          <p className="mt-1 text-sm text-red-500">
            {errors.dueDate.message}
          </p>
        )}
      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 pt-3">
        <button
          type="button"
          onClick={onClose}
          className="
            rounded-xl
            bg-slate-200
            px-6
            py-3
            font-medium
            text-slate-700
            transition

            hover:bg-slate-300

            dark:bg-slate-700
            dark:text-white
            dark:hover:bg-slate-600
          "
        >
          Cancel
        </button>

        <button
          disabled={isSubmitting}
          type="submit"
          className="
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition

            hover:bg-blue-700

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
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