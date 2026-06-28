import Layout from "../components/layout/Layout";
import TaskList from "../components/tasks/TaskList";

function Tasks() {
  return (
    <Layout>

      <div className="p-8">

        <div className="mb-10">

          <span className="uppercase tracking-wider text-blue-600 text-sm font-semibold">
            Tasks
          </span>

          <h1 className="text-4xl font-bold mt-2 text-slate-800">
            Task Management
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Create, edit, organize and manage all your tasks.
          </p>

        </div>

        <TaskList />

      </div>

    </Layout>
  );
}

export default Tasks;