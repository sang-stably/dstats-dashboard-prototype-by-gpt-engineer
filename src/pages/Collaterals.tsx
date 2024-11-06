import { Container, Box, Typography, Grid } from '@mui/material';
import CollateralPieChart from "@/components/CollateralPieChart";
import BalanceSheet from "@/components/BalanceSheet";
import NavMenu from "@/components/NavMenu";
import NetworkSelector from "@/components/NetworkSelector";
import AmoAllocationTable from "@/components/AmoAllocationTable";

const Collaterals = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 4, px: { xs: 3, sm: 4, md: 6 } }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography variant="h5" component="h1" fontWeight="bold">
            dSTATS Dashboard
          </Typography>
          <NavMenu />
        </Box>
        <NetworkSelector />
      </Box>
      
      <Grid container spacing={6} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <CollateralPieChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <BalanceSheet />
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <AmoAllocationTable />
      </Box>
    </Container>
  );
};

export default Collaterals;