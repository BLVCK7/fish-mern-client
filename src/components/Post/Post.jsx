import React from 'react';
import './Post.scss';
import photo1 from '../../assets/img/DSC09989.JPG';

import { Link } from 'react-router-dom';
import { Box, Card, IconButton, Stack, styled, Typography } from '@mui/material';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import PhishingOutlinedIcon from '@mui/icons-material/PhishingOutlined';

const Post = ({ data, id }) => {
  const NamedTypography = styled('Typography')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 7px 0 7px',
  });

  const Img = styled('img')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
  });

  return (
    <Card className="card">
      <Img src={photo1} alt="Otchet1" />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        spacing={1}
        sx={{ padding: '30px' }}>
        <Box className="card--box-header">
          <Link to={`/post/${id}`}>
            <Typography variant="h4" sx={{ padding: '7px 5px 0 7px' }}>
              {data.name}
            </Typography>
          </Link>
          <Box className="card--box-account">
            <NamedTypography variants="h6">{data.user}</NamedTypography>
            <NamedTypography variants="h6">{data.data}</NamedTypography>
            <NamedTypography variants="h6">{data.location}</NamedTypography>
          </Box>
          <Box className="card--box-weather">
            <IconButton aria-label="WbSunnyOutlinedIcon" color="inherit">
              <WbSunnyOutlinedIcon />
            </IconButton>
            <Typography variants="h6">{data.temperature}</Typography>
            <IconButton aria-label="AirOutlinedIcon" color="inherit">
              <AirOutlinedIcon />
            </IconButton>
            <Typography variants="h6">{data.wind}</Typography>
            <IconButton aria-label="CompressOutlinedIcon" color="inherit">
              <CompressOutlinedIcon />
            </IconButton>
            <Typography variants="h6">{data.pressure}</Typography>
          </Box>
        </Box>
        <Box className="card--box-fish">
          <IconButton aria-label="PhishingOutlinedIcon" color="inherit">
            <PhishingOutlinedIcon />
          </IconButton>
          <Typography variants="h6" sx={{ paddingRight: '5px' }}>
            {data.fish}
          </Typography>
        </Box>
        <Box className="card--box-description">
          {data.description.length > 150 ? (
            <Link to={`/post/${id}`}>
              <Typography
                variants="h6"
                sx={{ ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>
                Читать далее...
              </Typography>
            </Link>
          ) : (
            <Typography variants="h6">{data.description}</Typography>
          )}
        </Box>
      </Stack>
    </Card>
  );
};

export default Post;
