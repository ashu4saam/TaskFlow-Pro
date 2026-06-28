import { CheckCircle2, Clock3, Flag, ListTodo } from "lucide-react";
import { motion } from "framer-motion";
import { useTasks } from "../../context/TaskContext";

function AnalyticsCards() {
  const { tasks } = useTasks();

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const cards = [
    {
      title: "Total Tasks",
      value: total,
      icon: <ListTodo size={28} />,
      bg: "bg-blue-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle2 size={28} />,
      bg: "bg-green-500",
    },
    {
      title: "Pending",
      value: pending,
      icon: <Clock3 size={28} />,
      bg: "bg-yellow-500",
    },
    {
      title: "High Priority",
      value: highPriority,
      icon: <Flag size={28} />,
      bg: "bg-red-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card, index) => (

        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="
            rounded-3xl
            border
            border-slate-200
            dark:border-slate-700

            bg-white
            dark:bg-slate-900

            p-6

            shadow-lg
            hover:shadow-2xl

            transition-all
            duration-300
          "
        >
          <div
            className={`
              h-16
              w-16
              rounded-2xl
              ${card.bg}
              flex
              items-center
              justify-center
              text-white
              shadow-lg
            `}
          >
            {card.icon}
          </div>

          <h3 className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            {card.title}
          </h3>

          <p className="mt-2 text-4xl font-extrabold text-slate-900 dark:text-white">
            {card.value}
          </p>

        </motion.div>

      ))}

    </div>
  );
}

export default AnalyticsCards;