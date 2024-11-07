import { Card, CardContent, Typography, Tooltip, IconButton, Box } from '@mui/material';
import { Info as InfoIcon } from '@mui/icons-material';
import { MetricCardProps } from '@/lib/types';
import NumberCounter from './NumberCounter';
import { tooltipStyles } from '@/lib/styles';

const MetricCard = ({ title, value, format, description }: MetricCardProps) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
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
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="subtitle2" sx={{ color: 'white' }}>
            {title}
          </Typography>
          <Tooltip 
            title={description} 
            arrow 
            componentsProps={{
              tooltip: { sx: tooltipStyles },
              arrow: { sx: { color: 'rgba(19, 17, 28, 0.95)' } }
            }}
          >
            <IconButton 
              size="small" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.5)', 
                '&:hover': { 
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                } 
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

export default MetricCard;