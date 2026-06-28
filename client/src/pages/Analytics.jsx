import Layout from "../components/layout/Layout";
import AnalyticsCards from "../components/analytics/AnalyticsCards";
import StatusPieChart from "../components/analytics/StatusPieChart";
import PriorityChart from "../components/analytics/PriorityChart";

function Analytics() {
  return (
    <Layout>
      <div className="p-8">

        {/* Header */}

        <div className="mb-10">

          <span className="uppercase tracking-wider text-blue-600 text-sm font-semibold">
            Analytics
          </span>

          <h1 className="text-4xl font-bold mt-2 text-slate-800">
            Task Analytics Dashboard
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Monitor your productivity and understand your task progress.
          </p>

        </div>

        {/* Summary Cards */}

        <AnalyticsCards />

        {/* Charts */}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          <StatusPieChart />

          <PriorityChart />

        </div>

      </div>
    </Layout>
  );
}

export default Analytics;