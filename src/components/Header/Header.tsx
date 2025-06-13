import * as React from 'react';
import { AppBar, Toolbar, Button, IconButton, Container, styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {

  return (
    <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', width: '100%', boxShadow: 'none', height: '100px', marginLeft: '2em', }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Clickable logo/image */}
          <IconButton
            color="inherit"
            edge="start"
            component={RouterLink}
            to="/"
            aria-label="Home"
            sx={{ marginRight: 2, '&:hover': { backgroundColor: 'transparent'} }}>
            <img src="/images/logo.png" alt="KXStudio" style={{ width: 60, }} />
          </IconButton>

          <div style={{ display: 'flex', marginRight: '2em' }}>
            {/* Navigation Links */}
            <Button 
              color="inherit" 
              component={RouterLink} 
              to="/games"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  borderRadius: '8px',
                }
              }}
            >
              🎮 游戏
            </Button>
            <Button color="inherit" component={RouterLink} to="/character-page">
              角色
            </Button>
            {/* <Button color="inherit" component={RouterLink} to="/resources">
              资源
            </Button>
            <Button color="inherit" component={RouterLink} to="/about-us">
              了解我们
            </Button> */}
          </div>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;