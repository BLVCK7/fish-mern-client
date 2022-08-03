import { Stack } from '@mui/material';
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
    <Stack direction="row" justifyContent="flex-start" alignItems="center" id={id} key={id}>
      <p>
        {obj.fishName} на {obj.fishWeight} гр.
      </p>

      <ClearOutlinedIcon
        onClick={onDeleteFish}
        sx={{ opacity: '.2', cursor: 'pointer', marginLeft: '10px', ':hover': { opacity: '1' } }}
      />
    </Stack>
  );
};

export default Fish;
