import { Container, Box, Typography } from '@mui/material';
import NavMenu from '@/components/NavMenu';
import NetworkSelector from '@/components/NetworkSelector';
import UserPositionsTreemap from '@/components/UserPositionsTreemap';

// Mock data for the treemap - in production, this should come from your API
const mockUserPositions = [
  {
    address: "0x9eD6D2A6A29B5cF380B9EeD8...",
    dusdSupplied: 0,
    collateralSupplied: ["sUSDe", "sFRAX"],
    collateralValue: 500000,
    dusdDebt: 300000,
    currentLTV: 60,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 1.42,
  },
];

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