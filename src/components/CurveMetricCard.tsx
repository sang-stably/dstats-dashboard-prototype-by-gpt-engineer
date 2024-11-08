import { Card, CardContent, Typography, Box, Tooltip, IconButton } from '@mui/material';
import { InfoOutlined as InfoIcon } from '@mui/icons-material';
import NumberCounter from './NumberCounter';
import { tooltipStyles } from '@/lib/styles';

interface CurveMetricCardProps {
  title: string;
  value: number;
  info: string;
  format?: 'currency' | 'percentage' | 'number';
}

const CurveMetricCard = ({ title, value, info, format = 'currency' }: CurveMetricCardProps) => {
  return (
    <Card className="glass-card" sx={{ borderRadius: '12px' }}>
      <CardContent>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          mb: 2 
        }}>
          <Typography variant="subtitle2" sx={{ color: 'white' }}>
            {title}
          </Typography>
          <Tooltip 
            title={info} 
            arrow 
            componentsProps={{
              tooltip: { sx: tooltipStyles },
              arrow: { sx: { color: 'rgba(19, 17, 28, 0.95)' } }
            }}
          >
            <IconButton 
              size="small" 
              sx={{ 
                color: 'white', 
                '&:hover': { color: 'primary.main' },
                ml: 1,
                padding: '4px'
              }}
            >
              <InfoIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
        <NumberCounter value={value} format={format} />
      </CardContent>
    </Card>
  );
};

export default CurveMetricCard;