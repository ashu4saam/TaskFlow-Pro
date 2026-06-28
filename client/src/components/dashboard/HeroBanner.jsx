import { ArrowRight, Plus, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WorkImage from "../../assets/images/amico.svg";
import { useTasks } from "../../context/TaskContext";

function HeroBanner() {
  const { tasks } = useTasks();

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pending = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const productivity =
    tasks.length === 0
      ? 0
      : Math.round((completed / tasks.length) * 100);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        relative
        overflow-hidden
        rounded-[36px]
        bg-gradient-to-br
        from-blue-600
        via-indigo-600
        to-violet-700
        dark:from-slate-900
        dark:via-slate-800
        dark:to-slate-950
        p-10
        shadow-2xl
      "
    >
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* Left */}

        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">

            <Sparkles size={16} />

            Productivity Dashboard

          </div>

          <h1 className="mt-7 text-5xl lg:text-6xl font-black leading-tight text-white">

            Welcome back 👋

          </h1>

          <p className="mt-5 text-lg leading-8 text-blue-100">

            You have

            <span className="font-bold">
              {" "} {pending} pending
            </span>

            {" "}tasks and your productivity is

            <span className="font-bold">
              {" "} {productivity}%
            </span>

            today.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/tasks"
              className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-blue-700 shadow-xl hover:scale-105 transition"
            >
              <Plus size={20} />

              Manage Tasks

            </Link>

            <Link
              to="/analytics"
              className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur hover:bg-white/20 transition"
            >
              Analytics

              <ArrowRight size={18} />

            </Link>

          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-5">

            <MiniCard
              number={tasks.length}
              label="Tasks"
            />

            <MiniCard
              number={completed}
              label="Completed"
            />

            <MiniCard
              number={pending}
              label="Pending"
            />

          </div>

        </div>

        {/* Right */}

        <motion.img
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          src={WorkImage}
          alt="Dashboard"

          className="w-full max-w-md lg:max-w-xl drop-shadow-2xl"
        />

      </div>

    </motion.section>
  );
}

function MiniCard({ number, label }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur p-5">

      <h2 className="text-3xl font-bold text-white">
        {number}
      </h2>

      <p className="mt-1 text-sm text-blue-100">
        {label}
      </p>

    </div>
  );
}

export default HeroBanner;