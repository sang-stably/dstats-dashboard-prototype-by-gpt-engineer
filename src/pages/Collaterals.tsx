import { Container, Box, Typography, Grid } from '@mui/material';
import CollateralPieChart from "@/components/CollateralPieChart";
import BalanceSheet from "@/components/BalanceSheet";
import NavMenu from "@/components/NavMenu";
import NetworkSelector from "@/components/NetworkSelector";
import AmoAllocationTable from "@/components/AmoAllocationTable";

const Collaterals = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 6 }, px: { xs: 4, sm: 6, md: 8, xl: 16 } }}>
      <Box sx={{ 
        mb: { xs: 4, sm: 6 }, 
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        gap: 3
      }}>
        <Typography variant="h5" component="h1" fontWeight="bold">
          dSTATS Dashboard
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 3,
          flex: 1,
          justifyContent: 'flex-end'
        }}>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NavMenu />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <NetworkSelector />
          </Box>
          <Box sx={{ display: { sm: 'none' } }}>
            <NavMenu />
          </Box>
        </Box>
      </Box>
      
      <Grid container spacing={{ xs: 3, sm: 6 }}>
        <Grid item xs={12} md={6}>
          <CollateralPieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BalanceSheet />
        </Grid>
      </Grid>

      <Box sx={{ mt: { xs: 3, sm: 6 } }}>
        <AmoAllocationTable />
      </Box>
    </Container>
  );
};

export default Collaterals;