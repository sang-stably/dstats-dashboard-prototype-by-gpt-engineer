import { Card, CardContent, Typography, Table, TableBody, TableCell, TableRow, Box, Link } from '@mui/material';
import { useState, useMemo } from 'react';
import TableHeader from './table/TableHeader';
import { UserPosition, SortConfig } from './table/types';

interface TopPositionsTableProps {
  positions: UserPosition[];
}

const TopPositionsTable = ({ positions }: TopPositionsTableProps) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: 'asc'
  });

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

  const handleSort = (key: keyof UserPosition) => {
    setSortConfig((currentConfig) => ({
      key,
      direction:
        currentConfig.key === key && currentConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    }));
  };

  const sortedPositions = useMemo(() => {
    if (!sortConfig.key) return positions;

    return [...positions].sort((a, b) => {
      if (sortConfig.key === 'collateralSupplied') {
        const aValue = a[sortConfig.key].length;
        const bValue = b[sortConfig.key].length;
        return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
      }

      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc'
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0;
    });
  }, [positions, sortConfig]);

  return (
    <Card className="glass-card">
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
          Top Positions
        </Typography>
      </Box>
      <CardContent sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHeader onSort={handleSort} sortConfig={sortConfig} />
          <TableBody>
            {sortedPositions.map((position) => {
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