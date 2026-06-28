import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1">

      <Search
        size={20}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2

          text-slate-400
          dark:text-slate-500

          pointer-events-none
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks, descriptions..."
        className="
          h-14
          w-full

          rounded-2xl

          border
          border-slate-300
          dark:border-slate-700

          bg-slate-50
          dark:bg-slate-800

          pl-14
          pr-5

          text-slate-900
          dark:text-white

          placeholder:text-slate-400
          dark:placeholder:text-slate-500

          shadow-sm

          outline-none

          transition-all
          duration-300

          focus:border-blue-500
          focus:bg-white
          dark:focus:bg-slate-800

          focus:ring-4
          focus:ring-blue-500/15

          hover:border-slate-400
          dark:hover:border-slate-600
        "
      />

    </div>
  );
}

export default SearchBar;