import { Box, Link as MuiLink, IconButton, Drawer } from '@mui/material';
import { Link, useLocation } from "react-router-dom";
import { Menu, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import NetworkSelector from './NetworkSelector';

const NavMenu = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const items = [
    { name: "Key Metrics", path: "/" },
    { name: "dUSD", path: "/collaterals" },
    { name: "dLEND", path: "/dlend" },
    { name: "Curve", path: "/curve" },
    { 
      name: "dTRINITY App", 
      path: "https://app.testnet.dtrinity.org",
      isExternal: true 
    }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = (
    <>
      {items.map((item) => (
        item.isExternal ? (
          <MuiLink
            key={item.path}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              fontSize: { xs: '0.875rem', lg: '0.9rem' },
              fontWeight: 500,
              color: '#ffffff',
              transition: 'color 0.2s',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5,
              py: { xs: 1, sm: 0 },
              px: { sm: 1.5, md: 2 },
              whiteSpace: 'nowrap',
              textAlign: 'left',
              textDecoration: 'none',
              '&:hover': {
                color: '#8702ff',
              }
            }}
          >
            {item.name}
            <ExternalLink size={16} />
          </MuiLink>
        ) : (
          <Link 
            key={item.path} 
            to={item.path} 
            style={{ textDecoration: 'none' }}
            onClick={() => setMobileOpen(false)}
          >
            <MuiLink
              component="span"
              sx={{
                fontSize: { xs: '0.875rem', lg: '0.9rem' },
                fontWeight: 500,
                color: location.pathname === item.path ? '#8702ff' : '#ffffff',
                transition: 'color 0.2s',
                cursor: 'pointer',
                display: 'block',
                py: { xs: 1, sm: 0 },
                px: { sm: 1.5, md: 2 },
                whiteSpace: 'nowrap',
                textAlign: 'left',
                '&:hover': {
                  color: '#8702ff',
                  textDecoration: 'none'
                }
              }}
            >
              {item.name}
            </MuiLink>
          </Link>
        )
      ))}
    </>
  );

  return (
    <>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
        >
          <Menu />
        </IconButton>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 240,
              backgroundColor: '#13111C',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
              padding: 2,
              display: 'flex',
              flexDirection: 'column'
            },
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 1, 
            flexGrow: 1,
            alignItems: 'flex-start'
          }}>
            {menuItems}
          </Box>
          <Box sx={{ mt: 'auto', pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <NetworkSelector />
          </Box>
        </Drawer>
      </Box>
      <Box sx={{ 
        display: { xs: 'none', sm: 'flex' },
        flexDirection: 'row',
        gap: { sm: 1, md: 2 },
        alignItems: 'center',
        flexWrap: 'nowrap',
        overflow: 'auto',
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none'
        }
      }}>
        {menuItems}
      </Box>
    </>
  );
};

export default NavMenu;