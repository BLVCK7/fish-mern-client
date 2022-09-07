import { Alert, Backdrop } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackdropAlert = ({ toLocation, status, text, open, setOpen }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    setOpen(false);
    navigate(toLocation);
  };

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={onSubmit}>
      <Alert severity={status}>{text}</Alert>
    </Backdrop>
  );
};

export default BackdropAlert;
