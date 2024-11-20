import { Container, Box, Typography, Grid } from '@mui/material';
import CollateralPieChart from "@/components/CollateralPieChart";
import BalanceSheet from "@/components/BalanceSheet";
import NavMenu from "@/components/NavMenu";
import NetworkSelector from "@/components/NetworkSelector";
import AmoAllocationTable from "@/components/AmoAllocationTable";

const Collaterals = () => {
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