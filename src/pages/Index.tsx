import { Card } from '@/components/ui/card';
import MetricCard from '@/components/MetricCard';
import { ChartContainer } from '@/components/ui/chart';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Index = () => {
  const metrics = [
    // First Row - Supply and Borrowing Metrics
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
    // Second Row - APR and Ratio Metrics
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

  // Sample historical data
  const supplyData = [
    { date: '2024-01', circulating: 12000000, amo: 3000000 },
    { date: '2024-02', circulating: 13500000, amo: 3200000 },
    { date: '2024-03', circulating: 15234567, amo: 3500000 },
  ];

  const chartConfig = {
    circulating: {
      label: "Circulating Supply",
      theme: {
        light: "#8702ff",
        dark: "#8702ff"
      }
    },
    amo: {
      label: "AMO Supply",
      theme: {
        light: "#a64dff",
        dark: "#a64dff"
      }
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">dSTATS Dashboard</h1>
        </div>
        
        {/* First Row - Supply and Borrowing Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {metrics.slice(0, 4).map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              format={metric.format}
              description={metric.description}
            />
          ))}
        </div>

        {/* Second Row - APR and Ratio Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.slice(4, 8).map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              format={metric.format}
              description={metric.description}
            />
          ))}
        </div>

        {/* Supply Charts */}
        <div className="glass-card rounded-xl p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">dUSD Supply History</h2>
          <div className="h-[400px]">
            <ChartContainer config={chartConfig}>
              <Line
                data={supplyData}
                margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="circulating"
                  name="Circulating Supply"
                  stroke="#8702ff"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="amo"
                  name="AMO Supply"
                  stroke="#a64dff"
                  strokeWidth={2}
                />
              </Line>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;