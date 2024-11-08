import { Container, Box, Typography } from '@mui/material';
import NavMenu from '@/components/NavMenu';
import NetworkSelector from '@/components/NetworkSelector';
import UserPositionsTreemap from '@/components/UserPositionsTreemap';

// Generate 100 mock user positions
const generateMockUserPositions = () => {
  const positions = [];
  for (let i = 0; i < 100; i++) {
    const collateralValue = Math.random() * 1000000 + 100000; // Random value between 100k and 1.1M
    const dusdDebt = collateralValue * (Math.random() * 0.7); // Random debt up to 70% of collateral
    const currentLTV = (dusdDebt / collateralValue) * 100;
    const maxLTV = 80;
    const liquidationLTV = 85;
    const healthFactor = (liquidationLTV / currentLTV).toFixed(2);

    positions.push({
      address: `0x${Math.random().toString(16).slice(2, 14)}...`,
      dusdSupplied: 0,
      collateralSupplied: Math.random() > 0.5 ? ["sUSDe", "sFRAX"] : ["sFRAX"],
      collateralValue,
      dusdDebt,
      currentLTV,
      maxLTV,
      liquidationLTV,
      healthFactor: Number(healthFactor),
    });
  }
  return positions.sort((a, b) => b.collateralValue - a.collateralValue);
};

const mockUserPositions = generateMockUserPositions();

const DLend = () => {
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
            dSTATS
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

      <UserPositionsTreemap data={mockUserPositions} />
    </Container>
  );
};

export default DLend;