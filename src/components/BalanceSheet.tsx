import { Box, Card, CardContent, Typography, Divider } from '@mui/material';

const BalanceSheet = () => {
  const assets = [
    { name: 'sFRAX', value: 8500000 },
    { name: 'sDAI', value: 4200000 },
    { name: 'sUSDe', value: 2534567 },
  ];

  const liabilities = [
    { name: 'Circulating dUSD', value: 15234567 },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const totalAssets = assets.reduce((sum, item) => sum + item.value, 0);
  const totalLiabilities = liabilities.reduce((sum, item) => sum + item.value, 0);
  const equity = totalAssets - totalLiabilities;

  return (
    <Card sx={{
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      borderRadius: '12px',
      height: '100%',
      '&:hover': {
        transform: 'translateY(-2px)',
        borderColor: 'rgba(135, 2, 255, 0.3)',
        boxShadow: '0 8px 32px rgba(135, 2, 255, 0.15)'
      }
    }}>
      <Box sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="h6" component="h2">
          dUSD Balance Sheet
        </Typography>
      </Box>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Box>
          <Typography variant="subtitle1" fontWeight="600" mb={2}>
            Assets
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {assets.map((item) => (
              <Box key={item.name} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="text.secondary">{item.name}</Typography>
                <Typography fontFamily="monospace">{formatCurrency(item.value)}</Typography>
              </Box>
            ))}
            <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
              <Typography>Total Assets</Typography>
              <Typography fontFamily="monospace">{formatCurrency(totalAssets)}</Typography>
            </Box>
          </Box>
        </Box>
        
        <Box>
          <Typography variant="subtitle1" fontWeight="600" mb={2}>
            Liabilities & Equity
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {liabilities.map((item) => (
              <Box key={item.name} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography color="text.secondary">{item.name}</Typography>
                <Typography fontFamily="monospace">{formatCurrency(item.value)}</Typography>
              </Box>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography color="text.secondary">Protocol Equity</Typography>
              <Typography fontFamily="monospace">{formatCurrency(equity)}</Typography>
            </Box>
            <Divider sx={{ my: 2, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
              <Typography>Total L&E</Typography>
              <Typography fontFamily="monospace">{formatCurrency(totalAssets)}</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BalanceSheet;