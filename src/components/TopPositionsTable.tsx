import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box, Link } from '@mui/material';
import { ChevronUp, ChevronDown } from 'lucide-react';

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

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-5)}`;
  };

  const calculateDusdSupplied = (debt: number, ltv: number) => {
    if (ltv === 0) return 0;
    return (debt / ltv) * 100;
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
              <TableCell sx={{ color: 'white' }}>
                <div className="flex items-center gap-1">
                  Latest Activity
                  <div className="flex flex-col">
                    <ChevronUp className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>
                <div className="flex items-center gap-1">
                  User
                  <div className="flex flex-col">
                    <ChevronUp className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>
                <div className="flex items-center gap-1">
                  dUSD Supplied
                  <div className="flex flex-col">
                    <ChevronUp className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>
                <div className="flex items-center gap-1">
                  dUSD Debt
                  <div className="flex flex-col">
                    <ChevronUp className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>
                <div className="flex items-center gap-1">
                  Collateral
                  <div className="flex flex-col">
                    <ChevronUp className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>
                <div className="flex items-center gap-1">
                  Collateral Value
                  <div className="flex flex-col">
                    <ChevronUp className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>
                <div className="flex items-center gap-1">
                  Current LTV
                  <div className="flex flex-col">
                    <ChevronUp className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </TableCell>
              <TableCell sx={{ color: 'white' }}>
                <div className="flex items-center gap-1">
                  Health Factor
                  <div className="flex flex-col">
                    <ChevronUp className="w-4 h-4" />
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {positions.map((position) => {
              const calculatedSupplied = position.dusdSupplied === 0 ? 
                calculateDusdSupplied(position.dusdDebt, position.currentLTV) : 
                position.dusdSupplied;
              
              return (
                <TableRow key={position.address} className="hover:bg-white/5">
                  <TableCell sx={{ color: 'white' }}>{position.lastActivity}</TableCell>
                  <TableCell sx={{ color: 'white', fontFamily: 'monospace' }}>
                    <Link 
                      href={`https://etherscan.io/address/${position.address}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ color: 'white', textDecoration: 'underline' }}
                    >
                      {formatAddress(position.address)}
                    </Link>
                  </TableCell>
                  <TableCell sx={{ color: 'white' }}>
                    {formatCurrency(calculatedSupplied)}
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
                  <TableCell sx={{ color: 'white' }}>
                    {position.healthFactor ? position.healthFactor.toFixed(2) : 'N/A'} {position.healthIndicator}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default TopPositionsTable;