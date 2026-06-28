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
      initial={{ opacity: 0, y: 25 }}
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

        px-8
        py-8
        lg:px-12
        lg:py-10

        shadow-2xl
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">

        {/* ================= Left ================= */}

        <div className="max-w-2xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

            <Sparkles size={16} />

            <span className="text-sm font-semibold tracking-wide">
              Productivity Dashboard
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-5 text-4xl lg:text-5xl font-black leading-tight text-white">

            Welcome back 👋

          </h1>

          {/* Description */}

          <p className="mt-4 max-w-xl text-base lg:text-lg leading-8 text-blue-100">

            You have

            <span className="font-bold">
              {" "} {pending} pending tasks
            </span>

            {" "}and your productivity today is

            <span className="font-bold">
              {" "} {productivity}%
            </span>

            . Stay focused and finish your priorities.

          </p>

       {/* Buttons */}

<div className="mt-6 flex flex-wrap gap-4">

  {/* Manage Tasks */}

  <Link
    to="/tasks"
    className="
      flex
      items-center
      gap-3

      rounded-2xl

      bg-white
      dark:bg-slate-800

      border
      border-white/20
      dark:border-slate-700

      px-6
      py-3

      font-bold

      text-slate-900
      dark:text-white

      shadow-lg

      transition-all
      duration-300

      hover:-translate-y-1
      hover:bg-slate-100
      dark:hover:bg-slate-700
      hover:shadow-2xl
    "
  >
    <Plus size={20} />
    Manage Tasks
  </Link>

  {/* Analytics */}

  <Link
    to="/analytics"
    className="
      flex
      items-center
      gap-3

      rounded-2xl

      bg-white/15
      dark:bg-slate-800/70

      border
      border-white/20
      dark:border-slate-700

      px-6
      py-3

      font-semibold

      text-white

      backdrop-blur-md

      transition-all
      duration-300

      hover:-translate-y-1
      hover:bg-white/20
      dark:hover:bg-slate-700
      hover:shadow-xl
    "
  >
    Analytics

    <ArrowRight size={18} />
  </Link>

</div>

          {/* Mini Stats */}

          <div className="mt-8 grid grid-cols-3 gap-4">

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

        {/* ================= Right ================= */}

        <motion.img
          src={WorkImage}
          alt="Dashboard"

          animate={{
            y: [0, -8, 0],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
          }}

          className="
            w-[260px]
            sm:w-[320px]
            md:w-[380px]
            lg:w-[430px]
            xl:w-[470px]

            h-auto
            object-contain

            drop-shadow-2xl
          "
        />

      </div>

    </motion.section>
  );
}

function MiniCard({ number, label }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      className="
        rounded-2xl

        border
        border-white/10

        bg-white/10

        backdrop-blur-md

        px-5
        py-4
      "
    >

      <h2 className="text-2xl font-bold text-white">
        {number}
      </h2>

      <p className="mt-1 text-xs uppercase tracking-wider text-blue-100">
        {label}
      </p>

    </motion.div>
  );
}

export default HeroBanner;