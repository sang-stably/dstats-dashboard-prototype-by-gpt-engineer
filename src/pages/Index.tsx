import { Card } from '@/components/ui/card';
import MetricCard from '@/components/MetricCard';
import SupplyCharts from '@/components/SupplyCharts';
import NavMenu from '@/components/NavMenu';
import NetworkSelector from '@/components/NetworkSelector';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData } from '@/lib/api';
import { DashboardMetrics } from '@/lib/types';

const Index = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: fetchDashboardData
  });

  const getMetricProps = (metrics: DashboardMetrics) => [
    {
      title: "Total dUSD Supply",
      value: metrics.totalSupply,
      format: "currency",
      description: "The total amount of dUSD supplied to the protocol"
    },
    {
      title: "Available dUSD to Borrow",
      value: metrics.availableToBorrow,
      format: "currency",
      description: "Amount of dUSD currently available for borrowing"
    },
    {
      title: "Total dUSD Debt",
      value: metrics.totalDebt,
      format: "currency",
      description: "Total amount of dUSD borrowed from the protocol"
    },
    {
      title: "Total Collateral TVL",
      value: metrics.totalCollateralTVL,
      format: "currency",
      description: "Total value locked as collateral in the protocol"
    },
    {
      title: "dUSD Raw Supply APR",
      value: metrics.rawSupplyAPR,
      format: "percentage",
      description: "Annual Percentage Rate for supplying dUSD"
    },
    {
      title: "dUSD Raw Borrow APR",
      value: metrics.rawBorrowAPR,
      format: "percentage",
      description: "Annual Percentage Rate for borrowing dUSD"
    },
    {
      title: "dUSD Net Rebate APR",
      value: metrics.netRebateAPR,
      format: "percentage",
      description: "Net Annual Percentage Rate after rebates"
    },
    {
      title: "Utilization Ratio",
      value: metrics.utilizationRatio,
      format: "percentage",
      description: "Percentage of available dUSD currently being borrowed"
    }
  ];

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  const metrics = getMetricProps(data.metrics);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold">dSTATS Dashboard</h1>
            <NavMenu />
          </div>
          <NetworkSelector />
        </div>
        
        <div className="grid grid-rows-2 gap-6">
          <div className="grid grid-cols-4 gap-6">
            {metrics.slice(0, 4).map((metric, index) => (
              <MetricCard
                key={`row1-${index}`}
                {...metric}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {metrics.slice(4, 8).map((metric, index) => (
              <MetricCard
                key={`row2-${index}`}
                {...metric}
              />
            ))}
          </div>
        </div>

        <SupplyCharts data={data.supplyData} />
      </div>
    </div>
  );
};

export default Index;