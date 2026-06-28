function FilterBar({
  status,
  setStatus,
  priority,
  setPriority,
}) {
  return (
    <div className="flex gap-4">

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="
          h-14
          min-w-[170px]

          rounded-2xl

          border
          border-slate-700

          bg-slate-900/60

          px-5

          text-white

          outline-none

          transition

          hover:border-blue-500
        "
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="
          h-14
          min-w-[170px]

          rounded-2xl

          border
          border-slate-700

          bg-slate-900/60

          px-5

          text-white

          outline-none

          transition

          hover:border-blue-500
        "
      >
        <option value="All">All Priority</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

    </div>
  );
}

export default FilterBar;