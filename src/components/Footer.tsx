import { Box, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ width: '100%', py: 8, mt: 16 }}>
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img 
          src="https://app.testnet.dtrinity.org/dlend/dTrinity-White-Logo.png" 
          alt="dTrinity Logo" 
          style={{ height: '2rem', objectFit: 'contain' }}
        />
      </Container>
    </Box>
  );
};

export default Footer;