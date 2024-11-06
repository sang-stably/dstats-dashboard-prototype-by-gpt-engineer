import { Box, Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow, Link } from '@mui/material';
import { ExternalLink } from 'lucide-react';

interface AmoAllocation {
  protocol: string;
  pool: string;
  contract: string;
  amoType: string;
  value: number;
  link: string;
}

const amoData: AmoAllocation[] = [
  {
    protocol: "Curve",
    pool: "dUSD-FRAX",
    contract: "0xB17...03f27",
    amoType: "AMM",
    value: 5000000,
    link: "https://curve.fi/#/ethereum/pools/dusd-frax/deposit",
  },
  {
    protocol: "Fraxswap",
    pool: "dUSD-DAI",
    contract: "0xA23...92f18",
    amoType: "AMM",
    value: 3000000,
    link: "https://app.frax.finance/swap",
  },
  {
    protocol: "Velodrome",
    pool: "dUSD-USDC",
    contract: "0xC45...81d39",
    amoType: "AMM",
    value: 2500000,
    link: "https://app.velodrome.finance/liquidity",
  },
  {
    protocol: "Ra Exchange",
    pool: "dUSD-FRAX",
    contract: "0xD67...14e92",
    amoType: "AMM",
    value: 1500000,
    link: "https://ra.xyz",
  },
];

const AmoAllocationTable = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Card sx={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      borderRadius: '12px',
      '&:hover': {
        transform: 'translateY(-2px)',
        borderColor: 'rgba(135, 2, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(135, 2, 255, 0.15)'
      }
    }}>
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" component="h2" sx={{ color: 'white' }}>
          AMO dUSD Allocation
        </Typography>
      </Box>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'white' }}>Protocol</TableCell>
              <TableCell sx={{ color: 'white' }}>Pool</TableCell>
              <TableCell sx={{ color: 'white' }}>Contract</TableCell>
              <TableCell sx={{ color: 'white' }}>AMO Type</TableCell>
              <TableCell sx={{ color: 'white' }}>Value</TableCell>
              <TableCell sx={{ color: 'white' }} align="right">Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {amoData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ color: 'white' }}>{row.protocol}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.pool}</TableCell>
                <TableCell sx={{ color: 'white', fontFamily: 'monospace' }}>{row.contract}</TableCell>
                <TableCell sx={{ color: 'white' }}>{row.amoType}</TableCell>
                <TableCell sx={{ color: 'white' }}>{formatCurrency(row.value)}</TableCell>
                <TableCell align="right">
                  <Link
                    href={row.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#8702ff',
                      display: 'inline-flex',
                      '&:hover': { color: 'rgba(135, 2, 255, 0.8)' }
                    }}
                  >
                    <ExternalLink style={{ width: 16, height: 16 }} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default AmoAllocationTable;