import { ClipboardList } from "lucide-react";

function EmptyState() {
  return (
    <div className="bg-white rounded-3xl shadow-md p-12 text-center mt-10">
      <ClipboardList
        size={70}
        className="mx-auto text-blue-600"
      />

      <h2 className="text-3xl font-bold mt-6">
        No Tasks Yet
      </h2>

      <p className="text-gray-500 mt-3">
        Create your first task to start managing your work.
      </p>
    </div>
  );
}

export default EmptyState;