import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
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
          border-slate-700

          bg-slate-900/60

          pl-14
          pr-5

          text-white
          placeholder:text-slate-500

          outline-none

          transition-all
          duration-300

          focus:border-blue-500
          focus:ring-4
          focus:ring-blue-500/10
        "
      />

    </div>
  );
}

export default SearchBar;