import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { Link, Navigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/AuthSlice';

export default function Login() {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSumbitLogin = () => {
    dispatch(login({ username, password }));
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        margin="0 auto"
        sx={{ backgroundColor: '#fff', width: { mobile: '100%', laptop: '50%' } }}>
        <Box
          sx={{
            my: '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
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
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Запомнить меня"
          />
          <Button onClick={onSumbitLogin} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Войти
          </Button>

          <Stack direction="column" justifyContent="center" alignItems="center">
            {/* <Link to="#" variant="body2">
            Забыли пароль?
          </Link> */}

            <Link to="/register" variant="body2">
              {'У вас нет аккаунта? Зарегистрироваться!'}
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}
