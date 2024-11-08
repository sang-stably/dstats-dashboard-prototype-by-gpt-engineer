import { Box, Container, Typography } from '@mui/material';
import NavMenu from '@/components/NavMenu';
import NetworkSelector from '@/components/NetworkSelector';
import UserPositionsTreemap from '@/components/UserPositionsTreemap';
import TopPositionsTable from '@/components/TopPositionsTable';

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
    <Container maxWidth="xl" sx={{ py: { xs: 4, sm: 6 }, px: { xs: 3, sm: 4 } }}>
      <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
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
        <Box sx={{ marginLeft: 'auto' }}>
          <NetworkSelector />
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <UserPositionsTreemap data={mockUserPositions} />
      </Box>

      <Box>
        <TopPositionsTable positions={mockUserPositions.slice(0, 10)} />
      </Box>
    </Container>
  );
};

export default DLend;
