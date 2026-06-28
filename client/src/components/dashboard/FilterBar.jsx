function FilterBar({
  status,
  setStatus,
  priority,
  setPriority,
}) {
  return (
    <div className="flex gap-4 justify-end">

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="h-14 px-5 rounded-2xl bg-white border border-slate-200 shadow-sm outline-none hover:border-blue-400 transition"
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="h-14 px-5 rounded-2xl bg-white border border-slate-200 shadow-sm outline-none hover:border-blue-400 transition"
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