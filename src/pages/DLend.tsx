import { Box, Container, Typography } from '@mui/material';
import NavMenu from '@/components/NavMenu';
import NetworkSelector from '@/components/NetworkSelector';
import TopPositionsTable from '@/components/TopPositionsTable';

const mockUserPositions = [
  {
    lastActivity: '2 hours ago',
    address: '0x71C6EC7ab881b',
    dusdSupplied: 0,
    dusdDebt: 100000,
    collateralSupplied: ['sUSDe'],
    collateralValue: 200000,
    currentLTV: 50.00,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 1.70,
    healthIndicator: '❤️'
  },
  {
    lastActivity: '1 month ago',
    address: '0x8533EC8ab12f5',
    dusdSupplied: 0,
    dusdDebt: 300000,
    collateralSupplied: ['sFRAX', 'sUSDe'],
    collateralValue: 500000,
    currentLTV: 60.00,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 1.42,
    healthIndicator: '❤️'
  },
  {
    lastActivity: '3 months ago',
    address: '0x9256EC8dd43b',
    dusdSupplied: 200000,
    dusdDebt: 100000,
    collateralSupplied: ['sfrxETH'],
    collateralValue: 300000,
    currentLTV: 33.33,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 2.55,
    healthIndicator: '❤️'
  },
  {
    lastActivity: '14 days ago',
    address: '0x6311BC7ac99d4',
    dusdSupplied: 0,
    dusdDebt: 750000,
    collateralSupplied: ['sUSDe'],
    collateralValue: 1000000,
    currentLTV: 75.00,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 1.13,
    healthIndicator: '⚠️'
  },
  {
    lastActivity: '30 minutes ago',
    address: '0x4522DC6bb33a',
    dusdSupplied: 420,
    dusdDebt: 10000,
    collateralSupplied: ['sFRAX'],
    collateralValue: 100000,
    currentLTV: 10.00,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 8.50,
    healthIndicator: '❤️'
  },
  {
    lastActivity: '2 minutes ago',
    address: '0x3765FC8cc77e1',
    dusdSupplied: 0,
    dusdDebt: 250000,
    collateralSupplied: ['sUSDe'],
    collateralValue: 290000,
    currentLTV: 86.21,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 0.99,
    healthIndicator: '☢️'
  },
  {
    lastActivity: '5 days ago',
    address: '0x2873EC5dd88c',
    dusdSupplied: 0,
    dusdDebt: 100000,
    collateralSupplied: ['frxETH'],
    collateralValue: 150000,
    currentLTV: 66.67,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 1.27,
    healthIndicator: '❤️'
  },
  {
    lastActivity: '12 minutes ago',
    address: '0x1944BC4ee22b',
    dusdSupplied: 255000,
    dusdDebt: 180000,
    collateralSupplied: ['sUSDe'],
    collateralValue: 320000,
    currentLTV: 56.25,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 1.51,
    healthIndicator: '❤️'
  },
  {
    lastActivity: '17 hours ago',
    address: '0x7421AC3ff11d51',
    dusdSupplied: 176570,
    dusdDebt: 50000,
    collateralSupplied: ['sfrxETH'],
    collateralValue: 60000,
    currentLTV: 83.33,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 1.02,
    healthIndicator: '⚠️'
  },
  {
    lastActivity: '19 days ago',
    address: '0x8233EC9cc66b',
    dusdSupplied: 0,
    dusdDebt: 420000,
    collateralSupplied: ['sFRAX', 'sUSDe', 'frxETH'],
    collateralValue: 600000,
    currentLTV: 70.00,
    maxLTV: 80,
    liquidationLTV: 85,
    healthFactor: 1.21,
    healthIndicator: '❤️'
  }
];

const DLend = () => {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 6 }, px: { xs: 3, sm: 4 } }}>
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

      <Box>
        <TopPositionsTable positions={mockUserPositions} />
      </Box>
    </Container>
  );
};

export default DLend;
