import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';

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

interface TopPositionsTableProps {
  positions: UserPosition[];
}

const TopPositionsTable = ({ positions }: TopPositionsTableProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <Card className="glass-card">
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
          Top Positions
        </Typography>
      </Box>
      <CardContent sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Latest Activity</TableCell>
              <TableCell sx={{ color: 'white' }}>User</TableCell>
              <TableCell sx={{ color: 'white' }}>dUSD Supplied</TableCell>
              <TableCell sx={{ color: 'white' }}>dUSD Debt</TableCell>
              <TableCell sx={{ color: 'white' }}>Collateral</TableCell>
              <TableCell sx={{ color: 'white' }}>Collateral Value</TableCell>
              <TableCell sx={{ color: 'white' }}>Current LTV</TableCell>
              <TableCell sx={{ color: 'white' }}>Health Factor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((position) => (
              <TableRow key={position.address} className="hover:bg-white/5">
                <TableCell sx={{ color: 'white' }}>{position.lastActivity}</TableCell>
                <TableCell sx={{ color: 'white', fontFamily: 'monospace' }}>
                  {position.address}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {formatCurrency(position.dusdSupplied)}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {formatCurrency(position.dusdDebt)}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {position.collateralSupplied.length > 0 ? position.collateralSupplied.join(', ') : '-'}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {formatCurrency(position.collateralValue)}
                </TableCell>
                <TableCell sx={{ color: 'white' }}>
                  {position.currentLTV.toFixed(2)}%
                </TableCell>
                <TableCell>
                  <span>
                    {position.healthFactor ? position.healthFactor.toFixed(2) : 'N/A'} {position.healthIndicator}
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