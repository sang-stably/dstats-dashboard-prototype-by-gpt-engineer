import { Treemap } from '@mui/x-charts';
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
  data: UserPosition[];
}

const UserPositionsTreemap = ({ data }: TreeMapProps) => {
  const treeMapData = data.map((position) => ({
    id: position.address,
    size: position.collateralValue,
    color: position.healthFactor < 1 ? '#ff4444' : 
           position.healthFactor < 1.5 ? '#ffbb33' : '#00C851',
    formattedValue: `$${position.collateralValue.toLocaleString()}`,
  }));

  if (!data.length) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography>No positions available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', height: 400, p: 2 }}>
      <Treemap
        dataset={treeMapData}
        height={400}
        width={800}
        colors={treeMapData.map(item => item.color)}
        nodes={[
          {
            data: treeMapData,
            children: treeMapData
          }
        ]}
      />
    </Box>
  );
};

export default UserPositionsTreemap;