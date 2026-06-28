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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
      <StatCard
        title="Total Tasks"
        value={totalTasks}
        icon={<ClipboardList />}
        color="bg-blue-600"
      />

      <StatCard
        title="Completed"
        value={completed}
        icon={<CheckCircle />}
        color="bg-green-500"
      />

      <StatCard
        title="Pending"
        value={pending}
        icon={<Clock3 />}
        color="bg-yellow-500"
      />

      <StatCard
        title="High Priority"
        value={highPriority}
        icon={<AlertTriangle />}
        color="bg-red-500"
      />
    </div>
  );
}

export default StatsGrid;