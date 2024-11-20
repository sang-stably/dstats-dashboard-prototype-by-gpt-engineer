import { Container, Box, Typography, Grid } from '@mui/material';
import NavMenu from "@/components/NavMenu";
import NetworkSelector from "@/components/NetworkSelector";
import CurveMetricCard from "@/components/CurveMetricCard";
import CurveCharts from "@/components/CurveCharts";
import { curveMetrics, curveChartData } from "@/lib/mockCurveData";

const Curve = () => {
  return (
    <Container 
      maxWidth="xl" 
      sx={{ 
        py: { xs: 4, sm: 6 }, 
        px: { xs: 3, sm: 4, md: 6, lg: 8, xl: 16 }
      }}
    >
      <Box sx={{ 
        mb: { xs: 4, sm: 6 }, 
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        position: 'relative'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img 
            src="https://app.testnet.dtrinity.org/dlend/trinity.svg" 
            alt="Trinity Logo" 
            style={{ height: '24px', width: 'auto' }}
          />
          <Typography variant="h5" component="h1" fontWeight="bold">
            dSTATS Dashboard
          </Typography>
        </Box>
        <Box sx={{ 
          display: { xs: 'none', sm: 'block' } 
        }}>
          <NavMenu />
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}>
          <NetworkSelector />
        </Box>
        <Box sx={{ 
          display: { sm: 'none' }, 
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)'
        }}>
          <NavMenu />
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={2.4}>
          <CurveMetricCard
            title="dUSD/FRAX TVL"
            value={curveMetrics.dusdFraxTvl}
            info="Total Value Locked in the dUSD/FRAX pool"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <CurveMetricCard
            title="dUSD AMO TVL"
            value={curveMetrics.dusdAmoTvl}
            info="Total Value Locked in the dUSD AMO"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <CurveMetricCard
            title="AMO Pool Share"
            value={curveMetrics.amoPoolShare}
            format="percentage"
            info="Percentage of pool owned by AMO"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <CurveMetricCard
            title="24H Volume"
            value={curveMetrics.volume24h}
            info="Trading volume in the last 24 hours"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <CurveMetricCard
            title="24H Pool Fees"
            value={curveMetrics.poolFees24h}
            info="Trading fees earned in the last 24 hours"
          />
        </Grid>
      </Grid>

      <CurveCharts data={curveChartData} />
    </Container>
  );
};

export default Curve;