import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

  const COLORS = ["#22c55e", "#f59e0b"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-700

        bg-white
        dark:bg-slate-900

        p-6

        shadow-lg
      "
    >
      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Task Status
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Overview of completed and pending tasks
          </p>

        </div>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={105}
              paddingAngle={4}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#1e293b",
                color: "#fff",
              }}
            />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 flex justify-center gap-10">

        <div className="flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-green-500" />

          <span className="text-sm text-slate-600 dark:text-slate-300">
            Completed
          </span>

        </div>

        <div className="flex items-center gap-2">

          <div className="h-3 w-3 rounded-full bg-yellow-500" />

          <span className="text-sm text-slate-600 dark:text-slate-300">
            Pending
          </span>

        </div>

      </div>

      <div className="mt-6 text-center">

        <p className="text-3xl font-bold text-slate-900 dark:text-white">
          {tasks.length}
        </p>

        <p className="text-sm text-slate-500 dark:text-slate-400">
          Total Tasks
        </p>

      </div>

    </motion.div>
  );
}

export default StatusPieChart;