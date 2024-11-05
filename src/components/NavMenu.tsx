import { Box, Link as MuiLink } from '@mui/material';
import { Link, useLocation } from "react-router-dom";

const NavMenu = () => {
  const location = useLocation();
  
  const items = [
    { name: "Key Metrics", path: "/" },
    { name: "dUSD Collaterals", path: "/collaterals" },
    { name: "AMO & SMO", path: "/amo-smo" },
    { name: "Treasury", path: "/treasury" }
  ];

  return (
    <Box sx={{ display: 'flex', gap: 6 }}>
      {items.map((item) => (
        <Link 
          key={item.path} 
          to={item.path} 
          style={{ textDecoration: 'none' }}
        >
          <MuiLink
            component="span"
            sx={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: location.pathname === item.path ? '#8702ff' : 'rgba(255, 255, 255, 0.6)',
              transition: 'color 0.2s',
              cursor: 'pointer',
              '&:hover': {
                color: '#8702ff',
                textDecoration: 'none'
              }
            }}
          >
            {item.name}
          </MuiLink>
        </Link>
      ))}
    </Box>
  );
};

export default NavMenu;