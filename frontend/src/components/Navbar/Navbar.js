import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
//import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';
import { useContext } from 'react';
import { UserTokenContext } from '../Context/UserTokenContext';
import { Link } from 'react-router-dom';

const pages = [['Home', '/home'], ['Discover', '/discover'], ['Inbox', '/inbox'], ['Liked Songs', '/likedsongs'], ['My Top Songs', '/topsongs'], ['My Top Artists', '/topartists'], ['Forum', '/forum']];
const settings = [['Profile', '/profile'], ['Logout', '']];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user} = useContext(UserTokenContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    window.location.reload(true);
    window.location.href = 'http://localhost:3000/home'
    handleCloseNavMenu();
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/home"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Clarify-ed
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to='/home'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
            {pages.map((page) => (
              <Button
                component={Link}
                to={page[1]}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page[0]}
              </Button>
            ))}
          </Box>

          { user && <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="My Profile Picture" src={user ? user.images[0].url : ""} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <div>
                  {setting[0] === 'Profile' && <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography 
                      textAlign="center"
                      component={Link}
                      to={`${setting[1]}/${user.id}`}
                      key={setting}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 1, textDecoration: 'none',display: 'block' }}
                    >
                      {setting[0]}
                    </Typography>
                  </MenuItem>}
                  {setting[0] === 'Logout' && <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography 
                      textAlign="center"
                      component={Link}
                      to={'/home'}
                      key={setting}
                      onClick={handleLogout}
                      sx={{ my: 1, textDecoration: 'none',display: 'block' }}
                    >
                      {setting[0]}
                    </Typography>
                  </MenuItem>}
                </div>
                
                
              ))}
            </Menu>
          </Box>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
