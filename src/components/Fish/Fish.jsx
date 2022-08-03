import { Stack, Typography } from '@mui/material';
import React from 'react';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { useDispatch } from 'react-redux';
import { deleteFish } from '../../redux/slices/PostSlice';

const Fish = ({ obj, id }) => {
  const dispatch = useDispatch();

  const onDeleteFish = () => {
    dispatch(deleteFish(id));
  };

  return (
    <>
      <Typography>
        {obj.fishName} на {obj.fishWeight} гр.
      </Typography>
      <ClearOutlinedIcon
        onClick={onDeleteFish}
        sx={{ opacity: '.2', cursor: 'pointer', ':hover': { opacity: '1' } }}
      />
    </>
  );
};

export default Fish;
