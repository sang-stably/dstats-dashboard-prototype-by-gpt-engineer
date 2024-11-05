import { Container, Grid, Typography, Box } from '@mui/material';
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
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography>Loading...</Typography>
      </Box>
    );
  }

  const metrics = getMetricProps(data.metrics);

  return (
    <Container maxWidth="xl" sx={{ py: 4, px: { xs: 3, sm: 4, md: 6 } }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
            dSTATS Dashboard
          </Typography>
          <NavMenu />
        </Box>
        <NetworkSelector />
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {metrics.slice(0, 4).map((metric, index) => (
              <Grid item xs={12} sm={6} md={3} key={`row1-${index}`}>
                <MetricCard {...metric} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3}>
            {metrics.slice(4, 8).map((metric, index) => (
              <Grid item xs={12} sm={6} md={3} key={`row2-${index}`}>
                <MetricCard {...metric} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <SupplyCharts data={data.supplyData} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;