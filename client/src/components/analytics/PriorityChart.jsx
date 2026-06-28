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
import { Flag } from "lucide-react";

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
            Priority Distribution
          </h2>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Overview of task priorities
          </p>

        </div>

        <div className="rounded-2xl bg-blue-100 p-4 dark:bg-blue-900/30">
          <Flag
            size={28}
            className="text-blue-600 dark:text-blue-400"
          />
        </div>

      </div>

      {/* Chart */}

      <div className="mt-8 h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#475569"
              opacity={0.25}
            />

            <XAxis
              dataKey="priority"
              tickLine={false}
              axisLine={false}
              stroke="#94a3b8"
            />

            <YAxis
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              stroke="#94a3b8"
            />

            <Tooltip
              cursor={{
                fill: "rgba(59,130,246,.08)",
              }}
              contentStyle={{
                background: "#1e293b",
                border: "1px solid #334155",
                borderRadius: "14px",
                color: "#fff",
                boxShadow: "0 10px 25px rgba(0,0,0,.25)",
              }}
            />

            <Bar
              dataKey="tasks"
              radius={[14, 14, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Footer */}

      <div className="mt-8 grid grid-cols-3 gap-4">

        {data.map((item) => (

          <motion.div
            key={item.priority}
            whileHover={{
              y: -3,
            }}
            className="
              rounded-2xl

              border
              border-slate-200
              dark:border-slate-700

              bg-slate-50
              dark:bg-slate-700/50

              p-5

              text-center

              transition-all
            "
          >

            <div
              className="mx-auto mb-3 h-3.5 w-3.5 rounded-full"
              style={{
                background: item.color,
              }}
            />

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              {item.tasks}
            </h3>

            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              {item.priority}
            </p>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}

export default PriorityChart;