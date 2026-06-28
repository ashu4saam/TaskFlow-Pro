import { motion } from "framer-motion";

function StatCard({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white rounded-3xl shadow-lg p-6 border border-slate-100"
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">{title}</p>

          <h2 className="text-4xl font-bold mt-2">{value}</h2>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl ${color} text-white flex items-center justify-center`}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard;