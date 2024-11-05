import { Container, Box, Typography, Grid } from '@mui/material';
import CollateralPieChart from "@/components/CollateralPieChart";
import BalanceSheet from "@/components/BalanceSheet";
import NavMenu from "@/components/NavMenu";
import NetworkSelector from "@/components/NetworkSelector";
import AmoAllocationTable from "@/components/AmoAllocationTable";

const Collaterals = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 8 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Typography variant="h4" component="h1" fontWeight="bold">
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