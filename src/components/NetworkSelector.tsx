import { Button } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const NetworkSelector = () => {
  return (
    <Button 
      variant="text" 
      sx={{ 
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        color: 'white',
        '&:hover': {
          background: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'rgba(135, 2, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(135, 2, 255, 0.15)'
        }
      }}
    >
      <img 
        src="https://fraxscan.com/assets/frax/images/svg/logos/chain-light.svg?v=24.10.4.1" 
        alt="Fraxtal" 
        style={{ width: '20px', height: '20px' }}
      />
      <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Fraxtal</span>
      <KeyboardArrowDown sx={{ width: 16, height: 16, opacity: 0.5 }} />
    </Button>
  );
};

export default NetworkSelector;