import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WorkImage from "../../assets/images/amico.svg";

function HeroBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between overflow-hidden shadow-xl"
    >
      {/* Left Content */}
      <div className="max-w-xl">

        <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
          Productivity Dashboard
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
          Manage your tasks
          <br />
          smarter & faster.
        </h1>

        <p className="mt-6 text-lg text-blue-100 leading-8">
          Stay organized, track deadlines, and manage your daily workflow
          through a modern productivity dashboard built for efficiency.
        </p>

        <button className="mt-8 flex items-center gap-3 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
          Get Started
          <ArrowRight size={20} />
        </button>

      </div>

      {/* Right Illustration */}
      <div className="mt-10 lg:mt-0 flex justify-center">
        <img
          src={WorkImage}
          alt="Task Management"
          className="w-full max-w-sm lg:max-w-lg object-contain"
        />
      </div>
    </motion.section>
  );
}

export default HeroBanner;