import { Stack, Typography } from '@mui/material';
import React from 'react';

const CommentBlock = ({ data }) => {
  return (
    <Stack sx={{ mb: '10px' }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        sx={{ mb: '5px' }}>
        <img src="#" alt="ava" />
        <Typography>{data.username}</Typography>
        <Typography>{data.commentDate}</Typography>
      </Stack>

      <Typography>{data.commentText}</Typography>
    </Stack>
  );
};

export default CommentBlock;
