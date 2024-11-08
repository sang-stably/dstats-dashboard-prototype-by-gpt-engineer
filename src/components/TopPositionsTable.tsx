import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';
import { ExternalLink } from 'lucide-react';

interface UserPosition {
  address: string;
  dusdSupplied: number;
  collateralSupplied: string[];
  collateralValue: number;
  dusdDebt: number;
  currentLTV: number;
  maxLTV: number;
  liquidationLTV: number;
  healthFactor: number;
}

interface TopPositionsTableProps {
  positions: UserPosition[];
}

const TopPositionsTable = ({ positions }: TopPositionsTableProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getHealthFactorColor = (healthFactor: number) => {
    if (healthFactor >= 1.5) return 'text-green-500';
    if (healthFactor >= 1.2) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <Card className="glass-card">
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
          Top 10 Largest Positions
        </Typography>
      </Box>
      <CardContent sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Rank</TableCell>
              <TableCell sx={{ color: 'white' }}>User</TableCell>
              <TableCell sx={{ color: 'white' }}>dUSD Supplied</TableCell>
              <TableCell sx={{ color: 'white' }}>Collateral</TableCell>
              <TableCell sx={{ color: 'white' }}>Collateral Value</TableCell>
              <TableCell sx={{ color: 'white' }}>dUSD Debt</TableCell>
              <TableCell sx={{ color: 'white' }}>Current LTV</TableCell>
              <TableCell sx={{ color: 'white' }}>Max LTV</TableCell>
              <TableCell sx={{ color: 'white' }}>Liquidation LTV</TableCell>
              <TableCell sx={{ color: 'white' }}>Health Factor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((position, index) => (
              <TableRow key={position.address} className="hover:bg-white/5">
                <TableCell sx={{ color: 'white' }}>{index + 1}</TableCell>
                <TableCell sx={{ color: 'white', fontFamily: 'monospace' }}>
                  {position.address}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {formatCurrency(position.dusdSupplied)}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {position.collateralSupplied.join(', ')}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {formatCurrency(position.collateralValue)}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {formatCurrency(position.dusdDebt)}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {position.currentLTV.toFixed(1)}%
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {position.maxLTV}%
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {position.liquidationLTV}%
                </TableCell>
                <TableCell>
                  <span className={getHealthFactorColor(position.healthFactor)}>
                    {position.healthFactor.toFixed(2)} ❤️
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TopPositionsTable;