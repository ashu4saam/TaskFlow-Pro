import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950 px-6">
      <div className="text-center max-w-lg">

        <h1 className="text-8xl font-black text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          Oops! Page not found
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Home size={20} />
          Back to Dashboard
        </Link>

      </div>
    </div>
  );
}

export default NotFound;