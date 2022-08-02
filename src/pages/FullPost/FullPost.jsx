import React from 'react';
import './FullPost.scss';

import { Card, Slider, Stack, styled, Typography, Box, IconButton } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import PhishingOutlinedIcon from '@mui/icons-material/PhishingOutlined';
import axios from 'axios';
import CommentBlock from '../../components/CommentBlock/CommentBlock';

const FullPost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { posts } = useSelector((state) => state.postReducer);

  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  const commentData = [
    {
      username: 'BLVCK7',
      commentDate: '24-07-2022',
      commentText: 'Крутая рыбалка, я бы тоже сгонял на такую!',
    },
    {
      username: 'ROMKA001',
      commentDate: '25-07-2022',
      commentText: 'Аххахах веселые фотки!',
    },
    {
      username: 'vupsen',
      commentDate: '28-07-2022',
      commentText: 'Лайк',
    },
  ];

  React.useEffect(() => {
    axios
      .get(`http://localhost:5000/post/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении статьи');
      });
  }, [id]);

  const BlueBox = styled(Box)({
    backgroundColor: '#002A5B',
    color: '#fff',
    borderRadius: '10px',
    padding: '10px',
  });

  const PostTypo = styled(Typography)({
    margin: '10px 15px 0 0',
  });

  return (
    <>
      {isLoading ? (
        'Загрузка'
      ) : (
        <>
          <Card>
            <Stack
              direction={{ mobile: 'column', laptop: 'column' }}
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
                <BlueBox
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Typography
                    variant="h4"
                    fontWeight="700"
                    sx={{
                      textAlign: { mobile: 'center', laptop: 'start' },
                      marginBottom: { mobile: '10px', laptop: '0' },
                    }}>
                    {data.name}
                  </Typography>

                  {/* Автор, дата, локация */}
                  <Stack
                    direction={{ mobile: 'row', laptop: 'column' }}
                    justifyContent={{ mobile: 'space-evenly', laptop: 'center' }}
                    alignItems={{ mobile: 'flex-start', laptop: 'inherit' }}
                    spacing={0.5}>
                    <Stack
                      direction={{ mobile: 'column', laptop: 'row' }}
                      justifyContent={{ mobile: 'center', laptop: 'space-between' }}
                      alignItems={{ mobile: 'center', laptop: 'flex-start' }}
                      spacing={0}>
                      <PostTypo variants="h6" sx={{ fontWeight: '500' }}>
                        BLVCK7
                      </PostTypo>
                      <PostTypo variants="h6">{data.fishingDate.substr(0, 10)}</PostTypo>
                      <PostTypo variants="h6">{data.location}</PostTypo>
                    </Stack>

                    {/* Погода */}
                    <Stack
                      direction={{ mobile: 'column', laptop: 'row' }}
                      justifyContent="flex-start"
                      alignItems="inherit"
                      spacing={{ mobile: 0, laptop: 1 }}>
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}>
                        <IconButton aria-label="WbSunnyOutlinedIcon" color="inherit">
                          <WbSunnyOutlinedIcon />
                        </IconButton>
                        <Typography variants="h6">{data.temperature} °C</Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}>
                        <IconButton aria-label="AirOutlinedIcon" color="inherit">
                          <AirOutlinedIcon />
                        </IconButton>
                        <Typography variants="h6">
                          {data.windPower} {data.windDirection}
                        </Typography>
                      </Stack>
                      <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={1}>
                        <IconButton aria-label="CompressOutlinedIcon" color="inherit">
                          <CompressOutlinedIcon />
                        </IconButton>
                        <Typography variants="h6">{data.pressure} мм</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </BlueBox>

                {/* Пойманные рыбы */}
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={0.5}>
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

          {/* Комментарии */}
          <Card sx={{ mt: '20px', height: '100%', mb: '20px' }}>
            <Stack
              direction={{ mobile: 'column', laptop: 'column' }}
              justifyContent="space-between"
              alignItems={{ mobile: 'center', laptop: 'flex-start' }}
              spacing={3}
              p={3}>
              <Typography variant="h5" sx={{ color: '#002A5B' }}>
                Комментарии:
              </Typography>

              {/* Перебор комментариев */}
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={1}
                textAlign="flex-start"
                width="100%">
                {commentData.map((obj) => (
                  <BlueBox
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <CommentBlock data={obj} />
                  </BlueBox>
                ))}
              </Stack>
            </Stack>
          </Card>
        </>
      )}
    </>
  );
};

export default FullPost;
