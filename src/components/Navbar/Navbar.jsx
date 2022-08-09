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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/AuthSlice';

import { GiLuckyFisherman } from 'react-icons/gi';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const { isAuth } = useSelector((state) => state.auth);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
      navigate('/');
    }
  };

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
        onClickLogout();
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

        {isAuth ? (
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
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={setting.function}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        ) : isMobile ? (
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
              {pagesOnLogout.map((page) => (
                <MenuItem key={page.name} onClick={page.function}>
                  <Typography textAlign="center">{page.name}</Typography>
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
  );
};
export default Navbar;

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { isAuth, user } = useSelector((state) => state.auth);

//   const onClickLogout = () => {
//     if (window.confirm('Вы действительно хотите выйти?')) {
//       dispatch(logout());
//     }
//   };

//   return (
//     <Stack
//       direction="row"
//       justifyContent="space-between"
//       alignItems="center"
//       my="20px"
//       textAlign="center">
//       <Link to="/" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
//         Logo
//       </Link>
//       {isAuth ? (
//         <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb="10px">
//           <Link
//             to="/add-post"
//             style={{
//               color: '#fff',
//               fontSize: '18px',
//               textDecoration: 'none',
//             }}>
//             Add Post
//           </Link>
//           <Link to="/profile" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
//             {user.user.username}
//           </Link>
//           <Typography
//             to="/login"
//             style={{ color: '#fff', fontSize: '18px', textDecoration: 'none', cursor: 'pointer' }}
//             onClick={onClickLogout}>
//             Logout
//           </Typography>
//         </Stack>
//       ) : (
//         <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb="10px">
//           <Link to="/register" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
//             Register
//           </Link>
//           <Link to="/login" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
//             Login
//           </Link>
//         </Stack>
//       )}
//     </Stack>
//   );
// };

// export default Navbar;
