import { Search } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        placeholder="Search tasks..."
        className="w-full h-14 pl-14 pr-5 rounded-2xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
      />

    </div>
  );
}

export default SearchBar;