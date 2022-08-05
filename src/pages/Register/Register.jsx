import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Link, useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import axios from 'axios';

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const fields = {
    username,
    email,
    password,
  };

  const onSubmitReg = async () => {
    await axios.post(`http://localhost:5000/api/registration`, fields);
    navigate('/login');
  };

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
        <Stack direction="column" spacing={2} sx={{ my: '10px' }}>
          <TextField
            autoComplete="off"
            name="username"
            required
            fullWidth
            id="username"
            label="Имя пользователя"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            required
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Stack>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={onSubmitReg}>
          Зарегистрироваться
        </Button>

        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/login" variant="body2">
              Уже есть аккаунт? Войти
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
}
