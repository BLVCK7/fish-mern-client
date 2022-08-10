import React from 'react';
import { Stack, Typography } from '@mui/material';
import Post from '../../components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../../redux/slices/PostSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { post, status } = useSelector((state) => state.postReducer.posts);
  const user = useSelector((state) => state.auth.user?.user);

  const isLoading = status === 'loaded' ? false : true;

  React.useEffect(() => {
    dispatch(fetchPosts(user));
  }, []);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3} mb={2}>
      {isLoading ? (
        <Stack direction="row" justifyContent="center" alignItems="center" color="white">
          <Typography>Загрузка...</Typography>
        </Stack>
      ) : (
        post.map((post) => <Post key={post._id} data={post} id={post._id} />)
      )}
    </Stack>
  );
};

export default Home;
