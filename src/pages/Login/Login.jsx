import * as React from 'react';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Stack,
  Backdrop,
  Alert,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/AuthSlice';
import { useForm, Controller } from 'react-hook-form';
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
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
      password: '',
      checkbox: false,
    },
  });

  const onSumbitLogin = ({ username, password }) => {
    dispatch(login({ username, password }));
    reset();
    setOpen(true);
  };

  if (isAuth) {
    return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={() => navigate('/')}>
        <Alert severity="success">Вы успешно авторизовались!</Alert>
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

              <FormControlLabel
                control={
                  <Controller
                    name="checkbox"
                    control={control}
                    render={({ field }) => <Checkbox {...field} color="primary" />}
                  />
                }
                label="Запомнить меня"
              />

              <Button
                variant="contained"
                type="submit"
                sx={{ margin: { mobile: '10px 0 15px 0' } }}
                size="large">
                Войти
              </Button>

              {/* <Link to="#" variant="body2">
            Забыли пароль?
          </Link> */}

              <Link to="/register" variant="body2" style={{ fontSize: '15px', color: '#002A5B' }}>
                {'У вас нет аккаунта? Зарегистрироваться!'}
              </Link>
            </Stack>
          </form>
        </Paper>
      )}
    </>
  );
}
