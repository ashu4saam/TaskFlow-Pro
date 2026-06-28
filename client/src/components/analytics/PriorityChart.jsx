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
      whileHover={{ y: -5 }}
      className="
        rounded-3xl
        border
        border-slate-700
        bg-slate-900
        p-8
        shadow-lg
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Priority Distribution
          </h2>

          <p className="mt-2 text-slate-400">
            Overview of task priorities
          </p>

        </div>

        <Flag
          size={32}
          className="text-blue-400"
        />

      </div>

      {/* Chart */}

      <div className="mt-8 h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="priority"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              cursor={{ fill: "rgba(59,130,246,.08)" }}
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "14px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="tasks"
              radius={[12, 12, 0, 0]}
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

          <div
            key={item.priority}
            className="
              rounded-2xl
              bg-slate-800
              p-4
              text-center
            "
          >

            <div
              className="mx-auto mb-2 h-3 w-3 rounded-full"
              style={{
                background: item.color,
              }}
            />

            <h3 className="text-2xl font-bold text-white">
              {item.tasks}
            </h3>

            <p className="text-sm text-slate-400">
              {item.priority}
            </p>

          </div>

        ))}

      </div>

    </motion.div>
  );
}

export default PriorityChart;