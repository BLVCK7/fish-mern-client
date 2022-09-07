import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/AuthSlice';

export default function AlertDialog({ setOpenDialog, openDialog, setOpen }) {
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpenDialog(false);
  };

  const submitLogout = () => {
    setOpenDialog(false);
    setOpen(true);
    dispatch(logout());
  };

  return (
    <div>
      <Dialog open={openDialog} onClose={handleClose} aria-describedby="alert-dialog-description">
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы уверены, что хотите выйти?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitLogout} autoFocus>
            Подтверждаю
          </Button>
          <Button onClick={handleClose}>Отмена</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
