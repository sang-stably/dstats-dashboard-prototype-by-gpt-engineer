import { Card } from '@/components/ui/card';
import MetricCard from '@/components/MetricCard';

const Index = () => {
  const metrics = [
    // First row - Supply and borrowing metrics
    {
      title: "Total dUSD Supply",
      value: 15234567,
      format: "currency",
      description: "The total amount of dUSD supplied to the protocol"
    },
    {
      title: "Available dUSD to Borrow",
      value: 5678901,
      format: "currency",
      description: "Amount of dUSD currently available for borrowing"
    },
    {
      title: "Total dUSD Debt",
      value: 9555666,
      format: "currency",
      description: "Total amount of dUSD borrowed from the protocol"
    },
    {
      title: "Total Collateral TVL",
      value: 25789012,
      format: "currency",
      description: "Total value locked as collateral in the protocol"
    },
    // Second row - APR and ratio metrics
    {
      title: "dUSD Raw Supply APR",
      value: 4.52,
      format: "percentage",
      description: "Annual Percentage Rate for supplying dUSD"
    },
    {
      title: "dUSD Raw Borrow APR",
      value: 6.75,
      format: "percentage",
      description: "Annual Percentage Rate for borrowing dUSD"
    },
    {
      title: "dUSD Net Rebate APR",
      value: 2.23,
      format: "percentage",
      description: "Net Annual Percentage Rate after rebates"
    },
    {
      title: "Utilization Ratio",
      value: 62.8,
      format: "percentage",
      description: "Percentage of available dUSD currently being borrowed"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">dSTATS Dashboard</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.slice(0, 4).map((metric, index) => (
            <MetricCard
              key={`row1-${index}`}
              title={metric.title}
              value={metric.value}
              format={metric.format}
              description={metric.description}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {metrics.slice(4, 8).map((metric, index) => (
            <MetricCard
              key={`row2-${index}`}
              title={metric.title}
              value={metric.value}
              format={metric.format}
              description={metric.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;