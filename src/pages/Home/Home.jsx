import React from 'react';
import { Stack } from '@mui/material';
import Post from '../../components/Post/Post';
import data from '../../data';

const Home = () => {
  const _id = Math.floor(Math.random() * 1000);

  // console.log(data[0].description.length);

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="stretch" spacing={3} mb={2}>
      {data.map((post) => (
        <Post data={post} id={_id} key={post.id} />
      ))}
    </Stack>
  );
};

export default Home;
