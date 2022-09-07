import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Link, useNavigate } from 'react-router-dom';
import { Alert, Backdrop, Paper, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../redux/slices/AuthSlice';
import { Controller, useForm } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const { isAuth, status } = useSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSumbitLogin = ({ username, email, password }) => {
    dispatch(registration({ username, email, password }));
    reset();
    setOpen(true);
  };

  if (isAuth) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => navigate('/')}>
        <Alert severity="success">
          Вы успешно зарегистрировались! Нажмите, чтобы перейти на главную страницу.
        </Alert>
      </Backdrop>
    );
  }

  return (
    <>
      {status === 'loading' ? (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <Paper
          elevation={3}
          sx={{
            width: { mobile: '100%', tablet: '70%', laptop: '50%' },
            margin: { tablet: '0 auto' },
            padding: '2rem',
          }}>
          <form onSubmit={handleSubmit(onSumbitLogin)}>
            <Stack direction="column" alignItems="center" textAlign="center">
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Логин"
                    margin="normal"
                    required
                    // fullWidth
                    autoComplete="off"
                    autoFocus
                    sx={{ width: { mobile: '100%', tablet: '70%' } }}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Электронная почта"
                    margin="normal"
                    required
                    // fullWidth
                    autoComplete="off"
                    sx={{ width: { mobile: '100%', tablet: '70%' } }}
                  />
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Пароль"
                    type="password"
                    margin="normal"
                    required
                    // fullWidth
                    autoComplete="off"
                    sx={{ width: { mobile: '100%', tablet: '70%' } }}
                  />
                )}
              />

              <Button
                variant="contained"
                type="submit"
                sx={{ margin: { mobile: '10px 0 15px 0' } }}
                size="large">
                Зарегистрироваться
              </Button>

              <Link to="/login" variant="body2" style={{ fontSize: '15px', color: '#002A5B' }}>
                {'Уже есть аккаунт? Войти'}
              </Link>
            </Stack>
          </form>
        </Paper>
      )}
    </>
  );
}
