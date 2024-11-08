import { Card, CardContent, Typography, Box, Tooltip } from '@mui/material';
import { InfoOutlined as InfoIcon } from '@mui/icons-material';
import NumberCounter from './NumberCounter';

interface CurveMetricCardProps {
  title: string;
  value: number;
  info: string;
  format?: 'currency' | 'percentage' | 'number';
}

const CurveMetricCard = ({ title, value, info, format = 'currency' }: CurveMetricCardProps) => {
  return (
    <Card className="glass-card">
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <Typography variant="body2" sx={{ color: 'white', opacity: 0.7 }}>
              {title}
            </Typography>
            <Tooltip title={info} arrow>
              <InfoIcon sx={{ fontSize: 16, opacity: 0.7 }} />
            </Tooltip>
          </Box>
          <NumberCounter value={value} format={format} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CurveMetricCard;