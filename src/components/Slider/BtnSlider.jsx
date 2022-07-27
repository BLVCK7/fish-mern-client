import React from 'react';

import { ToggleButton } from '@mui/material';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <ToggleButton
      value="check"
      onClick={moveSlide}
      sx={{ display: { mobile: 'none', mobileX: 'inherit' }, borderColor: 'transparent' }}>
      {direction === 'next' ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosNewOutlinedIcon />}
    </ToggleButton>
  );
};

export default BtnSlider;
