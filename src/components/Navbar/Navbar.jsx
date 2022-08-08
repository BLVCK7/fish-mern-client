import { Stack, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/slices/AuthSlice';
import './Navbar.scss';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, user } = useSelector((state) => state.auth);

  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      dispatch(logout());
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      my="20px"
      textAlign="center">
      <Link to="/" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
        Logo
      </Link>
      {isAuth ? (
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb="10px">
          <Link
            to="/add-post"
            style={{
              color: '#fff',
              fontSize: '18px',
              textDecoration: 'none',
            }}>
            Add Post
          </Link>
          <Link to="/profile" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
            {user.user.username}
          </Link>
          <Typography
            to="/login"
            style={{ color: '#fff', fontSize: '18px', textDecoration: 'none', cursor: 'pointer' }}
            onClick={onClickLogout}>
            Logout
          </Typography>
        </Stack>
      ) : (
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mb="10px">
          <Link to="/register" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
            Register
          </Link>
          <Link to="/login" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
            Login
          </Link>
        </Stack>
      )}
    </Stack>
  );
};

export default Navbar;
