import { TreeMap } from '@mui/x-charts/TreeMap';
import { Box, Typography } from '@mui/material';

interface UserPosition {
  lastActivity: string;
  address: string;
  dusdSupplied: number;
  dusdDebt: number;
  collateralSupplied: string[];
  collateralValue: number;
  currentLTV: number;
  maxLTV: number;
  liquidationLTV: number;
  healthFactor: number;
  healthIndicator: string;
}

interface TreeMapProps {
  positions: UserPosition[];
}

const UserPositionsTreemap = ({ positions }: TreeMapProps) => {
  const data = positions.map((position) => ({
    id: position.address,
    size: position.collateralValue,
    color: position.healthFactor < 1 ? '#ff4444' : 
           position.healthFactor < 1.5 ? '#ffbb33' : '#00C851',
    formattedValue: `$${position.collateralValue.toLocaleString()}`,
  }));

  if (!positions.length) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography>No positions available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', height: 400, p: 2 }}>
      <TreeMap
        dataset={data}
        height={400}
        width={800}
        colors={data.map(item => item.color)}
        nodeLabel={({ data }) => `${data.id.slice(0, 8)}...${data.id.slice(-6)} (${data.formattedValue})`}
      />
    </Box>
  );
};

export default UserPositionsTreemap;