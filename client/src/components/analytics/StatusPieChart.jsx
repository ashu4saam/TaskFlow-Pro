import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import { useTasks } from "../../context/TaskContext";

function StatusPieChart() {
  const { tasks } = useTasks();

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const total = completed + pending;

  const completion =
    total === 0
      ? 0
      : Math.round((completed / total) * 100);

  const data = [
    {
      name: "Completed",
      value: completed,
    },
    {
      name: "Pending",
      value: pending,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#f59e0b",
  ];

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      transition={{ duration: 0.25 }}
      className="
        rounded-3xl

        border
        border-slate-200
        dark:border-slate-700/60

        bg-white
        dark:bg-slate-800

        p-8

        shadow-lg
        dark:shadow-[0_15px_35px_rgba(15,23,42,.35)]

        transition-all
        duration-300
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Task Status
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Overall completion overview
          </p>

        </div>

        <div className="rounded-2xl bg-green-100 p-4 dark:bg-green-900/30">

          <CheckCircle2
            size={28}
            className="text-green-600 dark:text-green-400"
          />

        </div>

      </div>

      {/* Chart */}

      <div className="relative mt-8 h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              innerRadius={82}
              outerRadius={112}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((item, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                background: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "14px",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,.25)",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

        {/* Center */}

        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center">

          <h2 className="text-5xl font-black text-slate-900 dark:text-white">
            {completion}%
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Completed
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 grid grid-cols-2 gap-5">

        <motion.div
          whileHover={{ y: -3 }}
          className="
            rounded-2xl

            border
            border-slate-200
            dark:border-slate-700

            bg-slate-50
            dark:bg-slate-700/50

            p-5

            transition-all
          "
        >

          <div className="flex items-center gap-3">

            <div className="h-3.5 w-3.5 rounded-full bg-green-500" />

            <span className="font-medium text-slate-600 dark:text-slate-300">
              Completed
            </span>

          </div>

          <h3 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            {completed}
          </h3>

        </motion.div>

        <motion.div
          whileHover={{ y: -3 }}
          className="
            rounded-2xl

            border
            border-slate-200
            dark:border-slate-700

            bg-slate-50
            dark:bg-slate-700/50

            p-5

            transition-all
          "
        >

          <div className="flex items-center gap-3">

            <div className="h-3.5 w-3.5 rounded-full bg-yellow-500" />

            <span className="font-medium text-slate-600 dark:text-slate-300">
              Pending
            </span>

          </div>

          <h3 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
            {pending}
          </h3>

        </motion.div>

      </div>

    </motion.div>
  );
}

export default StatusPieChart;