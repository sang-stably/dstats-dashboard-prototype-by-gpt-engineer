import { Container, Box, Typography, Grid } from '@mui/material';
import CollateralPieChart from "@/components/CollateralPieChart";
import BalanceSheet from "@/components/BalanceSheet";
import NavMenu from "@/components/NavMenu";
import NetworkSelector from "@/components/NetworkSelector";
import AmoAllocationTable from "@/components/AmoAllocationTable";

const Collaterals = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 2, sm: 4 }, px: { xs: 2, sm: 3, md: 6 } }}>
      <Box sx={{ 
        mb: { xs: 2, sm: 4 }, 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 0 },
        justifyContent: 'space-between', 
        alignItems: { xs: 'stretch', sm: 'center' }
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          gap: { xs: 2, sm: 4 }
        }}>
          <Typography variant="h5" component="h1" fontWeight="bold">
            dSTATS Dashboard
          </Typography>
          <NavMenu />
        </Box>
        <NetworkSelector />
      </Box>
      
      <Grid container spacing={{ xs: 2, sm: 6 }}>
        <Grid item xs={12} md={6}>
          <CollateralPieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BalanceSheet />
        </Grid>
      </Grid>

      <Box sx={{ mt: { xs: 2, sm: 6 } }}>
        <AmoAllocationTable />
      </Box>
    </Container>
  );
};

export default Collaterals;