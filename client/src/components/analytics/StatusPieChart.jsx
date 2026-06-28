import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
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
    <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6">

      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Task Status
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={60}
              outerRadius={95}
              paddingAngle={5}
            >

              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="flex justify-center gap-8 mt-4">

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="text-sm">
            Completed
          </span>

        </div>

        <div className="flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

          <span className="text-sm">
            Pending
          </span>

        </div>

      </div>

    </div>
  );
}

export default StatusPieChart;