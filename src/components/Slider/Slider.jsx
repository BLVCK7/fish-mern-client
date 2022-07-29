import { Badge, Stack, ToggleButton } from '@mui/material';
import React from 'react';
import BtnSlider from './BtnSlider';

import photo1 from '../../assets/img/DSC00002.jpg';
import photo4 from '../../assets/img/DSC00004.jpg';
import photo3 from '../../assets/img/DSC09989.jpg';

import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Slider = () => {
  const [slideIndex, setSlideIndex] = React.useState(1);
  const [likeActive, setLikeActive] = React.useState(false);
  const [badgeCount, setBadgeCount] = React.useState(0);

  const data = {
    photo: [
      {
        link: photo1,
        likes: 1,
      },
      {
        link: photo4,
        likes: 1,
      },
      {
        link: photo3,
        likes: 1,
      },
    ],
  };

  const nextSlide = () => {
    if (slideIndex !== data.photo.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === data.photo.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(data.photo.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  const likeToggler = () => {
    setLikeActive(!likeActive);
    setBadgeCount(+1);
  };

  const dislikeToggler = () => {
    setLikeActive(!likeActive);
    setBadgeCount(0);
  };

  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack direction="row" justifyContent="center" alignItems="center">
        <BtnSlider moveSlide={prevSlide} direction={'prev'} />
        {data.photo.map((obj, index) => (
          <img
            key={index}
            style={
              slideIndex === index + 1
                ? { opacity: 1, margin: '15px', borderRadius: '10px' }
                : {
                    position: 'absolute',
                    opacity: 0,
                    transitionProperty: 'opacity',
                    transitionDuration: '0.2s',
                    transitionTimingFunction: 'ease-in-out',
                    borderRadius: '10px',
                  }
            }
            src={`http://localhost:3000${obj.link}`}
            alt={index}
          />
        ))}
        <BtnSlider moveSlide={nextSlide} direction={'next'} />
      </Stack>

      <Badge
        color="primary"
        badgeContent={badgeCount}
        sx={{ position: 'relative', left: '165px', bottom: '45px' }}>
        {likeActive ? (
          <FavoriteOutlinedIcon onClick={dislikeToggler} color="error" sx={{ cursor: 'pointer' }} />
        ) : (
          <FavoriteBorderOutlinedIcon
            onClick={likeToggler}
            color="error"
            sx={{ cursor: 'pointer' }}
          />
        )}
      </Badge>

      <Stack direction="row" justifyContent="center" alignItems="center">
        {Array.from({ length: `${data.photo.length}` }).map((item, index) => (
          <ToggleButton
            key={index}
            value="check"
            onClick={() => moveDot(index + 1)}
            sx={{ borderColor: 'transparent' }}>
            {index + 1 === slideIndex ? (
              <FiberManualRecordIcon />
            ) : (
              <FiberManualRecordOutlinedIcon />
            )}
          </ToggleButton>
        ))}
      </Stack>
    </Stack>
  );
};

export default Slider;
