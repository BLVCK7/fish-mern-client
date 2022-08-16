import React from 'react';
import './FullPost.scss';

import { Card, Stack, styled, Typography, Box, IconButton, ToggleButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import CompressOutlinedIcon from '@mui/icons-material/CompressOutlined';
import PhishingOutlinedIcon from '@mui/icons-material/PhishingOutlined';
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import CommentBlock from '../../components/CommentBlock/CommentBlock';
import Slider from '../../components/Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getOnePost, removePost } from '../../redux/slices/PostSlice';

const FullPost = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, fullPost } = useSelector((state) => state.postReducer.posts);

  React.useEffect(() => {
    dispatch(getOnePost(id));
  }, []);

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

  const onDeletePost = () => {
    if (window.confirm('Действительно хотите удалить пост?')) {
      dispatch(removePost(id));
      navigate(`/`);
    }
  };

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
      {status !== 'loaded' ? (
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
              <Slider data={fullPost} />

              {/* Название поста */}
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={1}
                textAlign="flex-start"
                width="100%">
                {/* Кнопки редактирование / удаление */}
                <Stack direction="row" justifyContent="flex-end" alignItems="center">
                  <ToggleButton
                    size="small"
                    value="check"
                    sx={{
                      borderColor: 'transparent',
                    }}>
                    <EditIcon />
                  </ToggleButton>
                  <ToggleButton
                    size="small"
                    value="check"
                    sx={{
                      borderColor: 'transparent',
                    }}
                    onClick={onDeletePost}>
                    <ClearIcon />
                  </ToggleButton>
                </Stack>
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
                    {fullPost.name}
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
                        {fullPost.user.username}
                      </PostTypo>
                      <PostTypo variants="h6">{fullPost.fishingDate.substr(0, 10)}</PostTypo>
                      <PostTypo variants="h6">{fullPost.location}</PostTypo>
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
                        <Typography variants="h6">{fullPost.temperature} °C</Typography>
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
                          {fullPost.windPower} {fullPost.windDirection}
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
                        <Typography variants="h6">{fullPost.pressure} мм</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </BlueBox>

                {/* Пойманные рыбы */}
                <Stack direction="row" justifyContent="center" alignItems="center" spacing={0.5}>
                  <IconButton aria-label="PhishingOutlinedIcon" color="inherit">
                    <PhishingOutlinedIcon />
                  </IconButton>
                  {fullPost.fish.map((obj, index) => (
                    <Typography key={index} variants="h6" sx={{ paddingRight: '5px' }}>
                      {obj.fishName} на {obj.fishWeight} гр.
                    </Typography>
                  ))}
                </Stack>
              </Stack>

              {/* Описание рыбалки */}
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                  width: { mobile: '100%', laptop: '50%' },
                  margin: '0 auto',
                  textAlign: 'center',
                  backgroundColor: '#002A5B',
                  color: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                }}>
                <Typography variants="h6">{fullPost.description}</Typography>
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
              <Typography variant="h5" sx={{ color: '#002A5B', margin: '0 auto' }}>
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
                {commentData.map((obj, index) => (
                  <BlueBox
                    key={index}
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
