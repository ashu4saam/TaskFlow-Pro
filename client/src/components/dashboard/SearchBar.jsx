import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">

      <Search
        size={20}
        className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-slate-400
          dark:text-slate-500
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search tasks..."
        className="
          w-full
          h-14
          pl-14
          pr-5
          rounded-2xl

          bg-white
          dark:bg-slate-900

          border
          border-slate-200
          dark:border-slate-700

          text-slate-800
          dark:text-white

          placeholder:text-slate-400
          dark:placeholder:text-slate-500

          shadow-sm
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500

          transition-all
          duration-300

          outline-none
        "
      />

    </div>
  );
}

export default SearchBar;