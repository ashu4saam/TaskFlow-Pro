import { CheckCircle2, Clock3, Flag, ListTodo } from "lucide-react";
import { useTasks } from "../../context/TaskContext";

function AnalyticsCards() {
  const { tasks } = useTasks();

  const total = tasks.length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const highPriority = tasks.filter(
    (task) => task.priority === "High"
  ).length;

  const cards = [
    {
      title: "Total Tasks",
      value: total,
      icon: <ListTodo size={26} />,
      bg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: <CheckCircle2 size={26} />,
      bg: "bg-green-100",
      color: "text-green-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: <Clock3 size={26} />,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
    {
      title: "High Priority",
      value: highPriority,
      icon: <Flag size={26} />,
      bg: "bg-red-100",
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-3xl shadow-md border border-slate-200 p-6 hover:shadow-xl transition"
        >
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.bg} ${card.color}`}
          >
            {card.icon}
          </div>

          <h3 className="mt-6 text-gray-500 font-medium">
            {card.title}
          </h3>

          <p className="text-4xl font-bold mt-2 text-slate-800">
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default AnalyticsCards;