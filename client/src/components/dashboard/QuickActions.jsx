import { Link } from "react-router-dom";
import {
  Plus,
  CalendarDays,
  BarChart3,
  ClipboardList,
} from "lucide-react";

const actions = [
  {
    title: "Add Task",
    icon: <Plus size={22} />,
    link: "/tasks",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Calendar",
    icon: <CalendarDays size={22} />,
    link: "/calendar",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Analytics",
    icon: <BarChart3 size={22} />,
    link: "/analytics",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Tasks",
    icon: <ClipboardList size={22} />,
    link: "/tasks",
    color: "from-orange-500 to-red-500",
  },
];

function QuickActions() {
  return (
    <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 shadow-lg">

      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => (

          <Link
            key={action.title}
            to={action.link}
            className={`rounded-2xl bg-gradient-to-r ${action.color} p-5 text-white transition hover:scale-105`}
          >
            <div className="mb-4">
              {action.icon}
            </div>

            <h3 className="font-semibold">
              {action.title}
            </h3>

          </Link>

        ))}

      </div>

    </div>
  );
}

export default QuickActions;