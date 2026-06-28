import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WorkImage from "../../assets/images/amico.svg";

function HeroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        p-8
        lg:p-12
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        shadow-2xl
        transition-all
        duration-300

        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-purple-700

        dark:from-slate-800
        dark:via-slate-900
        dark:to-black
      "
    >
      {/* Decorative Blur */}

      <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      {/* Left Section */}

      <div className="relative z-10 max-w-xl">

        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-white/15
            backdrop-blur-md
            border
            border-white/20
            px-5
            py-2
            text-sm
            font-medium
            text-white
          "
        >
          🚀 Productivity Dashboard
        </span>

        <h1
          className="
            mt-7
            text-5xl
            lg:text-6xl
            font-extrabold
            leading-tight
            tracking-tight
            text-white
          "
        >
          Manage your tasks
          <br />
          smarter & faster.
        </h1>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-blue-100
            dark:text-slate-300
          "
        >
          Stay organized, track deadlines, monitor productivity,
          and manage your workflow with a clean, modern dashboard
          built for efficiency.
        </p>

        <button
          className="
            mt-8
            flex
            items-center
            gap-3
            rounded-xl
            bg-white
            px-7
            py-3.5
            font-semibold
            text-blue-700
            shadow-xl
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-2xl

            dark:bg-blue-600
            dark:text-white
            dark:hover:bg-blue-700
          "
        >
          Get Started

          <ArrowRight
            size={20}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>

      {/* Right Section */}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 mt-10 lg:mt-0"
      >
        <img
          src={WorkImage}
          alt="Task Management"
          className="
            w-full
            max-w-sm
            lg:max-w-lg
            object-contain
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </motion.div>
    </motion.section>
  );
}

export default HeroBanner;