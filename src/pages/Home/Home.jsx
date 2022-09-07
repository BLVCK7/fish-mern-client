import React from 'react';
import { Stack } from '@mui/material';
import Post from '../../components/Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../redux/slices/PostSlice';
import BasicPagination from '../../components/Pagination/Pagination';
import NotAuth from '../NotAuth/NotAuth';

const Home = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.postReducer.posts);
  const { isAuth } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3} mb={2}>
      {isAuth ? post.map((post) => <Post key={post._id} data={post} id={post._id} />) : <NotAuth />}
    </Stack>
  );
};

export default Home;
