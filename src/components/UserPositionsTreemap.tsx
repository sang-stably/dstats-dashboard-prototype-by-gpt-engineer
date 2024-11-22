import { Box, Typography } from '@mui/material';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { UserPosition } from './table/types';

interface TreemapProps {
  data: UserPosition[];
}

const UserPositionsTreemap = ({ data }: TreemapProps) => {
  const getColorByHealthFactor = (healthFactor: number) => {
    if (!healthFactor) return '#64748b'; // gray for positions with no health factor
    if (healthFactor >= 1.5) return '#22c55e'; // green for safe
    if (healthFactor >= 1.2) return '#fbbf24'; // yellow for warning
    return '#ef4444'; // red for danger
  };

  // Filter out positions with no collateral value and transform data for Recharts
  const transformedData = {
    name: 'positions',
    children: data
      .filter(pos => pos.collateralValue > 0)
      .map(pos => ({
        name: `${pos.address.slice(0, 6)}...${pos.address.slice(-4)}`,
        size: pos.collateralValue,
        color: getColorByHealthFactor(pos.healthFactor),
        healthFactor: pos.healthFactor,
        collateralValue: pos.collateralValue,
        dusdDebt: pos.dusdDebt,
        currentLTV: pos.currentLTV,
      })),
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload[0]) return null;

    const data = payload[0].payload;
    return (
      <Box sx={{ 
        bgcolor: 'rgba(0, 0, 0, 0.85)', 
        p: 1.5, 
        borderRadius: 1,
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
          Address: {data.name}
        </Typography>
        <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
          Value: {formatCurrency(data.collateralValue)}
        </Typography>
        <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
          Debt: {formatCurrency(data.dusdDebt)}
        </Typography>
        <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
          Health Factor: {data.healthFactor.toFixed(2)}
        </Typography>
        <Typography variant="caption" sx={{ color: 'white', display: 'block' }}>
          LTV: {data.currentLTV.toFixed(2)}%
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ 
      height: 400,
      p: 2,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      borderRadius: 2
    }}>
      <ResponsiveContainer>
        <Treemap
          data={[transformedData]}
          dataKey="size"
          stroke="#fff"
          fill="#8884d8"
          content={({ root, depth, x, y, width, height, index, payload, colors, rank, name }) => {
            const data = root.children[index];
            return (
              <g>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  style={{
                    fill: data.color,
                    stroke: '#fff',
                    strokeWidth: 2,
                    strokeOpacity: 1 / (depth + 1e-10),
                  }}
                />
                {width > 50 && height > 30 && (
                  <text
                    x={x + width / 2}
                    y={y + height / 2}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={12}
                  >
                    {data.name}
                  </text>
                )}
              </g>
            );
          }}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </Box>
  );
};

export default UserPositionsTreemap;