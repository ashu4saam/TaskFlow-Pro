function FilterBar({
  status,
  setStatus,
  priority,
  setPriority,
}) {
  const selectStyle = `
    h-14
    min-w-[170px]
    px-5
    rounded-2xl

    bg-white
    dark:bg-slate-900

    border
    border-slate-200
    dark:border-slate-700

    text-slate-700
    dark:text-white

    shadow-sm

    outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:border-blue-500

    transition-all
    duration-300

    cursor-pointer
  `;

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-end">

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className={selectStyle}
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={selectStyle}
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