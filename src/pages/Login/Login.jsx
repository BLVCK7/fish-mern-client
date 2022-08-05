import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
        <TextField
          margin="normal"
          required
          fullWidth
          id="login"
          label="Логин"
          name="login"
          autoComplete="off"
          autoFocus
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
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Запомнить меня"
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Войти
        </Button>

        <Stack direction="column" justifyContent="center" alignItems="center">
          <Link to="#" variant="body2">
            Забыли пароль?
          </Link>

          <Link to="/register" variant="body2">
            {'У вас нет аккаунта? Зарегистрироваться!'}
          </Link>
        </Stack>
      </Box>
    </Stack>
  );
}
