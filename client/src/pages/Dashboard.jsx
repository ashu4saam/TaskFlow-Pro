import Layout from "../components/layout/Layout";
import HeroBanner from "../components/dashboard/HeroBanner";
import StatsGrid from "../components/dashboard/StatsGrid";
import TaskList from "../components/tasks/TaskList";

function Dashboard() {
  return (
    <Layout>
      <HeroBanner />
      <StatsGrid />
      <TaskList />
    </Layout>
  );
}

export default Dashboard;