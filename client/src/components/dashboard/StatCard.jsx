import { motion } from "framer-motion";

function StatCard({ title, value, icon, color }) {
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
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        p-6
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-slate-800 dark:text-white">
            {value}
          </h2>

        </div>

        <div
          className={`
            h-16
            w-16
            rounded-2xl
            ${color}
            flex
            items-center
            justify-center
            text-white
            shadow-lg
          `}
        >
          {icon}
        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;