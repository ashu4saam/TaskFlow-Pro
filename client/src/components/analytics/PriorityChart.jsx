import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useTasks } from "../../context/TaskContext";

function PriorityChart() {
  const { tasks } = useTasks();

  const data = [
    {
      priority: "High",
      tasks: tasks.filter((task) => task.priority === "High").length,
    },
    {
      priority: "Medium",
      tasks: tasks.filter((task) => task.priority === "Medium").length,
    },
    {
      priority: "Low",
      tasks: tasks.filter((task) => task.priority === "Low").length,
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6">

      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Priority Distribution
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="priority" />

            <YAxis allowDecimals={false} />

            <Tooltip />

            <Bar
              dataKey="tasks"
              radius={[8, 8, 0, 0]}
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default PriorityChart;