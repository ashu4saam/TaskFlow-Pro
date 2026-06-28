import {
  CheckCircle2,
  Clock3,
  Flag,
  ListTodo,
  TrendingUp,
} from "lucide-react";

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

  const high = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const productivity =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const cards = [
    {
      title: "Total Tasks",
      value: total,
      icon: <ListTodo size={26} />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle2 size={26} />,
      color: "from-green-500 to-green-700",
    },
    {
      title: "Pending",
      value: pending,
      icon: <Clock3 size={26} />,
      color: "from-orange-500 to-yellow-500",
    },
    {
      title: "High Priority",
      value: high,
      icon: <Flag size={26} />,
      color: "from-red-500 to-red-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {cards.map((card, index) => (

        <motion.div
          key={card.title}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.1,
          }}
          whileHover={{
            y: -6,
          }}
          className="
            group

            rounded-3xl

            border
            border-slate-700

            bg-slate-900

            p-6

            shadow-lg

            transition
          "
        >

          <div className="flex justify-between">

            <div>

              <p className="text-slate-400 text-sm">
                {card.title}
              </p>

              <h2 className="mt-3 text-5xl font-black text-white">
                {card.value}
              </h2>

            </div>

            <div
              className={`
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl

                bg-gradient-to-br

                ${card.color}

                text-white
              `}
            >
              {card.icon}
            </div>

          </div>

          <div className="mt-6 flex items-center gap-2">

            <TrendingUp
              size={18}
              className="text-green-400"
            />

            <span className="text-sm text-green-400">
              Live Statistics
            </span>

          </div>

        </motion.div>

      ))}

      {/* Productivity */}

      <motion.div
        whileHover={{
          y: -6,
        }}
        className="
          md:col-span-2
          xl:col-span-4

          rounded-3xl

          border
          border-slate-700

          bg-slate-900

          p-8
        "
      >

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Productivity Score
            </h2>

            <p className="mt-2 text-slate-400">
              Completion rate based on your current tasks.
            </p>

          </div>

          <div className="text-5xl font-black text-blue-500">
            {productivity}%
          </div>

        </div>

        <div className="mt-6 h-4 rounded-full bg-slate-800 overflow-hidden">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${productivity}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="
              h-full

              rounded-full

              bg-gradient-to-r
              from-blue-500
              via-violet-500
              to-purple-500
            "
          />

        </div>

      </motion.div>

    </div>
  );
}

export default AnalyticsCards;