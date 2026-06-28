import Layout from "../components/layout/Layout";

import HeroBanner from "../components/dashboard/HeroBanner";
import StatsGrid from "../components/dashboard/StatsGrid";
import InsightsCard from "../components/dashboard/InsightsCard";
import QuickActions from "../components/dashboard/QuickActions";
import RecentTasks from "../components/dashboard/RecentTasks";

function Dashboard() {
  return (
    <Layout>
      <div className="space-y-10">

        {/* Hero */}

        <HeroBanner />

        {/* KPI Cards */}

        <StatsGrid />

        {/* Insights + Quick Actions */}

        <div className="grid gap-8 lg:grid-cols-2">

          <InsightsCard />

          <QuickActions />

        </div>

        {/* Recent Tasks */}

        <RecentTasks />

      </div>
    </Layout>
  );
}

export default Dashboard;