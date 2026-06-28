import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

import { motion } from "framer-motion";
import { useTasks } from "../../context/TaskContext";

function PriorityChart() {
  const { tasks } = useTasks();

  const data = [
    {
      priority: "High",
      tasks: tasks.filter((task) => task.priority === "High").length,
      color: "#ef4444",
    },
    {
      priority: "Medium",
      tasks: tasks.filter((task) => task.priority === "Medium").length,
      color: "#f59e0b",
    },
    {
      priority: "Low",
      tasks: tasks.filter((task) => task.priority === "Low").length,
      color: "#22c55e",
    },
  ];

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
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Priority Distribution
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Breakdown of tasks by priority level
        </p>

      </div>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#cbd5e1"
            />

            <XAxis
              dataKey="priority"
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
            />

            <YAxis
              allowDecimals={false}
              tick={{
                fill: "#64748b",
                fontSize: 13,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                backgroundColor: "#1e293b",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="tasks"
              radius={[10, 10, 0, 0]}
            >
              {data.map((entry) => (
                <Cell
                  key={entry.priority}
                  fill={entry.color}
                />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 flex justify-center gap-6 flex-wrap">

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-sm text-slate-600 dark:text-slate-300">
            High
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Medium
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-green-500" />
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Low
          </span>
        </div>

      </div>

    </motion.div>
  );
}

export default PriorityChart;