import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Link, Navigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../redux/slices/AuthSlice';

export default function Register() {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
      sx={{ backgroundColor: '#fff', width: '50%' }}>
      <Box
        sx={{
          my: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ width: '160%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="login"
            label="Логин"
            name="login"
            autoComplete="off"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() =>
              dispatch(
                registration({
                  username,
                  email,
                  password,
                }),
              )
            }>
            Зарегистрироваться
          </Button>

          <Link to="/login" variant="body2">
            Уже есть аккаунт? Войти
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
