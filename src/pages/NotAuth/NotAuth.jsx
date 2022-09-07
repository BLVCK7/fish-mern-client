import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

import Button from '@mui/material/Button';
import { Alert, Grid, Paper, Stack, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackSkeleton from './BackSkeleton';

export default function NotAuth() {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item>
          <Item>
            <BackSkeleton />
          </Item>
        </Grid>

        <Grid item>
          <Item>
            <BackSkeleton />
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <BackSkeleton />
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <BackSkeleton />
          </Item>
        </Grid>
        <Grid item>
          <Item>
            <BackSkeleton />
          </Item>
        </Grid>

        <Grid item>
          <Item>
            <BackSkeleton />
          </Item>
        </Grid>
      </Grid>

      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <Stack direction="column" alignItems="center" spacing={3}>
          <Alert severity="warning">Для просмотра контента необходимо авторизоваться!</Alert>
          <Button variant="contained" sx={{ width: '50%' }} onClick={() => navigate('/register')}>
            Зарегистрироваться
          </Button>
          <Button variant="contained" sx={{ width: '50%' }} onClick={() => navigate('/login')}>
            Авторизоваться
          </Button>
        </Stack>
      </Backdrop>
    </div>
  );
}
