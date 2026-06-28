function SkeletonCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-700
        bg-white
        dark:bg-slate-900
        p-6
        shadow-lg
        animate-pulse
      "
    >
      {/* Title */}
      <div className="h-6 w-40 rounded-lg bg-slate-200 dark:bg-slate-700"></div>

      {/* Description */}
      <div className="mt-4 space-y-2">
        <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-700"></div>
        <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>
      </div>

      {/* Badges */}
      <div className="mt-6 flex gap-3">
        <div className="h-7 w-20 rounded-full bg-slate-200 dark:bg-slate-700"></div>
        <div className="h-7 w-24 rounded-full bg-slate-200 dark:bg-slate-700"></div>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-between items-center">
        <div className="h-4 w-32 rounded bg-slate-200 dark:bg-slate-700"></div>

        <div className="flex gap-3">
          <div className="h-10 w-10 rounded-xl bg-slate-200 dark:bg-slate-700"></div>
          <div className="h-10 w-10 rounded-xl bg-slate-200 dark:bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;