import React from 'react';

import { Link } from 'react-router-dom';
import { Box, Card, IconButton, Stack, styled, Typography } from '@mui/material';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import PhishingOutlinedIcon from '@mui/icons-material/PhishingOutlined';
import Slider from '../Slider/Slider';

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

  console.log(data);

  return (
    <Card>
      <Stack
        direction={{ mobile: 'column', laptop: 'row' }}
        justifyContent="space-between"
        alignItems={{ mobile: 'center', laptop: 'center' }}
        spacing={3}
        p={3}>
        {/* Фотки поста */}
        <Slider data={data} />

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
                  BLVCK7
                </PostTypo>
                <PostTypo variants="h6">{data.fishingDate}</PostTypo>
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
                  <Typography variants="h6">
                    {data.windDirection}
                    {data.windPower}
                  </Typography>
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
            {data.fish.map((obj, index) => (
              <Typography key={index} variants="h6" sx={{ paddingRight: '5px' }}>
                {obj.fishName} на {obj.fishWeight} гр.
              </Typography>
            ))}
          </Stack>

          {/* Описание рыбалки */}
          <BlueBox>
            {/* {data.description.length > 150 ? (
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
            )} */}
            <Typography variants="h6">Описание поста</Typography>
          </BlueBox>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Post;
