import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function StatCard({
  title,
  value,
  icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group

        relative

        overflow-hidden

        rounded-3xl

        bg-white
        dark:bg-slate-900

        border
        border-slate-200
        dark:border-slate-700

        p-7

        shadow-lg
        hover:shadow-2xl

        transition-all
        duration-300
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -top-10
          -right-10

          w-32
          h-32

          rounded-full

          bg-blue-500/10

          blur-3xl

          opacity-0

          group-hover:opacity-100

          transition-all
          duration-500
        "
      />

      <div className="relative z-10 flex justify-between">

        <div>

          <p
            className="
              text-sm

              font-semibold

              uppercase

              tracking-wide

              text-slate-500
              dark:text-slate-400
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-3

              text-5xl

              font-black

              text-slate-900
              dark:text-white
            "
          >
            {value}
          </h2>

          <div className="mt-6 flex items-center gap-2">

            <ArrowUpRight
              size={18}
              className="text-green-500"
            />

            <span
              className="
                text-sm

                font-medium

                text-green-600
              "
            >
              Updated just now
            </span>

          </div>

        </div>

        <div
          className={`
            w-16
            h-16

            rounded-2xl

            flex
            items-center
            justify-center

            text-white

            shadow-lg

            ${color}
          `}
        >
          {icon}
        </div>

      </div>

    </motion.div>
  );
}

export default StatCard;