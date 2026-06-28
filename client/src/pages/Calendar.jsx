import Layout from "../components/layout/Layout";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useMemo, useState } from "react";
import dayjs from "dayjs";

import { CalendarDays } from "lucide-react";

import { useTasks } from "../context/TaskContext";

function CalendarPage() {
  const [date, setDate] = useState(new Date());

  const { tasks } = useTasks();

  // Sort tasks by due date
  const upcomingTasks = useMemo(() => {
    return [...tasks]
      .filter((task) => task.dueDate)
      .sort(
        (a, b) =>
          new Date(a.dueDate) - new Date(b.dueDate)
      );
  }, [tasks]);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      case "Low":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Layout>
      <div className="p-8">

        {/* Header */}

        <div className="mb-10">

          <span className="uppercase tracking-wider text-blue-600 text-sm font-semibold">
            Calendar
          </span>

          <h1 className="text-4xl font-bold mt-2 text-slate-800">
            Task Calendar
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            View your schedule and upcoming task deadlines.
          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Calendar */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-md border border-slate-200 p-8 flex justify-center">

            <Calendar
              onChange={setDate}
              value={date}
            />

          </div>

          {/* Upcoming Tasks */}

          <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-6">

            <div className="flex items-center gap-3 mb-6">

              <CalendarDays className="text-blue-600" />

              <h2 className="text-xl font-bold">
                Upcoming Tasks
              </h2>

            </div>

            {upcomingTasks.length === 0 ? (

              <p className="text-gray-500">
                No upcoming tasks.
              </p>

            ) : (

              <div className="space-y-4">

                {upcomingTasks.map((task) => (

                  <div
                    key={task._id}
                    className="border rounded-2xl p-4 hover:shadow-md transition"
                  >

                    <div className="flex justify-between items-start">

                      <h3 className="font-semibold">
                        {task.title}
                      </h3>

                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>

                    </div>

                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                      {task.description}
                    </p>

                    <p className="text-sm text-blue-600 mt-3 font-medium">
                      {dayjs(task.dueDate).format("DD MMM YYYY")}
                    </p>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default CalendarPage;