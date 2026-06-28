import {
  ClipboardList,
  CheckCircle,
  Clock3,
  AlertTriangle,
} from "lucide-react";

import StatCard from "./StatCard";
import { useTasks } from "../../context/TaskContext";

function StatsGrid() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  return (
    <section className="mt-10">

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">

        <StatCard
          title="Total Tasks"
          value={totalTasks}
          icon={<ClipboardList size={28} />}
          color="bg-gradient-to-r from-blue-500 to-blue-700"
        />

        <StatCard
          title="Completed"
          value={completed}
          icon={<CheckCircle size={28} />}
          color="bg-gradient-to-r from-green-500 to-green-700"
        />

        <StatCard
          title="Pending"
          value={pending}
          icon={<Clock3 size={28} />}
          color="bg-gradient-to-r from-yellow-500 to-orange-500"
        />

        <StatCard
          title="High Priority"
          value={highPriority}
          icon={<AlertTriangle size={28} />}
          color="bg-gradient-to-r from-red-500 to-red-700"
        />

      </div>

    </section>
  );
}

export default StatsGrid;