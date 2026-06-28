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
      }}
      className="
        rounded-3xl

        border
        border-slate-700

        bg-slate-900

        p-8

        shadow-lg
      "
    >
      <div className="flex justify-between items-center">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Task Status
          </h2>

          <p className="mt-2 text-slate-400">
            Overall completion overview
          </p>

        </div>

        <CheckCircle2
          size={34}
          className="text-green-400"
        />

      </div>

      <div className="relative mt-8 h-80">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              innerRadius={80}
              outerRadius={110}
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

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">

          <h2 className="text-5xl font-black text-white">
            {completion}%
          </h2>

          <p className="text-slate-400 mt-2">
            Completed
          </p>

        </div>

      </div>

      <div className="mt-8 grid grid-cols-2 gap-5">

        <div className="rounded-2xl bg-slate-800 p-5">

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span className="text-slate-300">
              Completed
            </span>

          </div>

          <h3 className="mt-4 text-3xl font-bold text-white">
            {completed}
          </h3>

        </div>

        <div className="rounded-2xl bg-slate-800 p-5">

          <div className="flex items-center gap-3">

            <div className="h-3 w-3 rounded-full bg-yellow-500" />

            <span className="text-slate-300">
              Pending
            </span>

          </div>

          <h3 className="mt-4 text-3xl font-bold text-white">
            {pending}
          </h3>

        </div>

      </div>

    </motion.div>
  );
}

export default StatusPieChart;