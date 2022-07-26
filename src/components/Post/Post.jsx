import React from 'react';
import photo1 from '../../assets/img/DSC09989.JPG';

import { Link } from 'react-router-dom';
import { Box, Card, CardMedia, IconButton, Stack, styled, Typography } from '@mui/material';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import PhishingOutlinedIcon from '@mui/icons-material/PhishingOutlined';

const Post = ({ data, id }) => {
  const BlueBox = styled(Box)({
    backgroundColor: '#002A5B',
    color: '#fff',
    borderRadius: '10px',
    padding: '10px',
  });

  const ActiveLink = styled(Typography)({
    ':hover': { textDecoration: 'underline', cursor: 'pointer' },
  });

  const PostTypo = styled(Typography)({
    margin: '10px 15px 0 0',
  });

  return (
    <Card>
      {/* Картинка поста */}
      <Stack
        direction={{ mobile: 'column', laptop: 'row' }}
        justifyContent="space-between"
        alignItems={{ mobile: 'center', laptop: 'flex-start' }}
        spacing={3}
        p={3}>
        <CardMedia
          component="img"
          alt="first_otchet"
          image={photo1}
          sx={{
            width: { mobile: '100%', laptop: '50%' },
            height: { mobile: '100%', laptop: '50%' },
          }}
        />

        {/* Название поста */}
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={1}
          textAlign="flex-start"
          width="100%">
          <BlueBox>
            <Link
              to={`/post/${id}`}
              style={{
                textDecoration: 'none',
                color: 'white',
              }}>
              <ActiveLink
                variant="h4"
                fontWeight="700"
                sx={{
                  textAlign: { mobile: 'center', laptop: 'start' },
                  marginBottom: { mobile: '10px', laptop: '0' },
                }}>
                {data.name}
              </ActiveLink>
            </Link>

            {/* Автор, дата, локация */}
            <Stack
              direction={{ mobile: 'row', laptop: 'column' }}
              justifyContent={{ mobile: 'space-evenly', laptop: 'center' }}
              alignItems={{ mobile: 'flex-start', laptop: 'flex-start' }}
              spacing={0.5}>
              <Stack
                direction={{ mobile: 'column', laptop: 'row' }}
                justifyContent={{ mobile: 'center', laptop: 'space-between' }}
                alignItems={{ mobile: 'center', laptop: 'flex-start' }}
                spacing={0}>
                <PostTypo variants="h6" sx={{ fontWeight: '500' }}>
                  {data.user}
                </PostTypo>
                <PostTypo variants="h6">{data.data}</PostTypo>
                <PostTypo variants="h6">{data.location}</PostTypo>
              </Stack>

              {/* Погода */}
              <Stack
                direction={{ mobile: 'column', laptop: 'row' }}
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={{ mobile: 0, laptop: 1 }}>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                  <IconButton aria-label="WbSunnyOutlinedIcon" color="inherit">
                    <WbSunnyOutlinedIcon />
                  </IconButton>
                  <Typography variants="h6">{data.temperature}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                  <IconButton aria-label="AirOutlinedIcon" color="inherit">
                    <AirOutlinedIcon />
                  </IconButton>
                  <Typography variants="h6">{data.wind}</Typography>
                </Stack>
                <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                  <IconButton aria-label="CompressOutlinedIcon" color="inherit">
                    <CompressOutlinedIcon />
                  </IconButton>
                  <Typography variants="h6">{data.pressure}</Typography>
                </Stack>
              </Stack>
            </Stack>
          </BlueBox>

          {/* Пойманные рыбы */}
          <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={0.5}>
            <IconButton aria-label="PhishingOutlinedIcon" color="inherit">
              <PhishingOutlinedIcon />
            </IconButton>
            <Typography variants="h6" sx={{ paddingRight: '5px' }}>
              {data.fish}
            </Typography>
          </Stack>

          {/* Описание рыбалки */}
          <BlueBox>
            {data.description.length > 150 ? (
              <>
                <Typography variants="h6">{data.description}</Typography>
                <Link
                  to={`/post/${id}`}
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}>
                  <ActiveLink variants="h6">Читать далее...</ActiveLink>
                </Link>
              </>
            ) : (
              <Typography variants="h6">{data.description}</Typography>
            )}
          </BlueBox>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Post;
