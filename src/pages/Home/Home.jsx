import React from 'react';
import { Stack } from '@mui/material';
import Post from '../../components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../../redux/slices/PostSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.postReducer.posts);

  const isPostsLoading = post.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3} mb={2}>
      {isPostsLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        post.map((post) => <Post key={post._id} data={post} id={post._id} />)
      )}
    </Stack>
  );
};

export default Home;
