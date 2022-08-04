import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
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
        <Link to="/register" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
          Register
        </Link>
        <Link to="/login" style={{ color: '#fff', fontSize: '18px', textDecoration: 'none' }}>
          Login
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
