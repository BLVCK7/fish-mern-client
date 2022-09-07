import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { GiLuckyFisherman } from 'react-icons/gi';
import AlertDialog from './alertDialogue';
import BackdropAlert from '../BackdropAlert';

const Navbar = () => {
  const navigate = useNavigate();

  const [openDialog, setOpenDialog] = React.useState(false); // confirm на выход из аккаунта
  const [open, setOpen] = React.useState(false); // alert на выход из аккаунта

  const { isAuth, status } = useSelector((state) => state.auth);

  const user = useSelector((state) => state?.auth?.user?.user);

  // Проверка isMobile
  const [width, setWidth] = React.useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  // ------------------

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const settings = [
    {
      function: function () {
        setAnchorElUser(null);
        navigate('/profile');
      },
      name: 'Профиль',
    },
    {
      function: function () {
        setAnchorElUser(null);
        setOpenDialog(true);
      },
      name: 'Выйти',
    },
  ];

  const settingsOnLogout = [
    {
      function: function () {
        setAnchorElUser(null);
        navigate('/register');
      },
      name: 'Зарегистрироваться',
    },
    {
      function: function () {
        setAnchorElUser(null);
        navigate('/login');
      },
      name: 'Войти',
    },
  ];

  const pagesOnLogout = [
    {
      function: function () {
        setAnchorElNav(null);
        navigate('/register');
      },
      name: 'Зарегистрироваться',
    },
    {
      function: function () {
        setAnchorElNav(null);
        navigate('/login');
      },
      name: 'Войти',
    },
  ];

  return (
    <>
      {openDialog ? (
        <AlertDialog setOpenDialog={setOpenDialog} openDialog={openDialog} setOpen={setOpen} />
      ) : undefined}

      <AppBar position="fixed">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ px: { mobile: '10px', laptop: '30px' } }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            onClick={() => navigate('/')}
            sx={{ ':hover': { cursor: 'pointer' } }}>
            <GiLuckyFisherman style={{ fontSize: '25px', marginRight: '10px' }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                fontFamily: 'Montserrat',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}>
              Рыбка мечты
            </Typography>
          </Stack>

          {open ? (
            <BackdropAlert
              toLocation="/"
              status="success"
              text="Вы успешно вышли из аккаунта!"
              open={open}
              setOpen={setOpen}
            />
          ) : isAuth ? (
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              <Button
                onClick={() => navigate('/add-post')}
                sx={{
                  my: 2,
                  color: 'white',
                  mr: '10px',
                }}>
                Добавить пост
              </Button>

              <Tooltip title="Open settings">
                <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                onClose={() => setAnchorElUser(null)}>
                {status === 'loaded' && (
                  <Typography
                    textAlign="center"
                    sx={{ fontWeight: '700', cursor: 'default', py: '5px' }}>
                    {user.username}
                  </Typography>
                )}

                {settings.map((setting) => (
                  <MenuItem
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    key={setting.name}
                    onClick={setting.function}>
                    <Typography>{setting.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Stack>
          ) : isMobile && status !== 'loaded' ? (
            <Box sx={{ py: '10.25px' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(event) => setAnchorElNav(event.currentTarget)}
                color="inherit">
                <MenuIcon />
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
                onClose={() => setAnchorElNav(null)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}>
                {status === 'loaded' && (
                  <Typography
                    textAlign="center"
                    sx={{ fontWeight: '700', cursor: 'default', py: '5px' }}>
                    {user.username}
                  </Typography>
                )}
                {pagesOnLogout.map((page) => (
                  <MenuItem key={page.name} onClick={page.function}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : isMobile && status === 'loaded' && isAuth === false ? (
            <Box sx={{ py: '22.5px' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={(event) => setAnchorElNav(event.currentTarget)}
                color="inherit">
                <MenuIcon />
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
                onClose={() => setAnchorElNav(null)}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}>
                {settingsOnLogout.map((page) => (
                  <MenuItem key={page.name} onClick={page.function}>
                    <Typography textAlign="center" onClick={() => setAnchorElNav(null)}>
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Stack direction="row" justifyContent="flex-end" alignItems="center">
              {settingsOnLogout.map((settings) => (
                <Button
                  key={settings.name}
                  onClick={settings.function}
                  sx={{
                    my: 2,
                    color: 'white',
                    mr: '10px',
                  }}>
                  {settings.name}
                </Button>
              ))}
            </Stack>
          )}
        </Stack>
      </AppBar>
    </>
  );
};
export default Navbar;
