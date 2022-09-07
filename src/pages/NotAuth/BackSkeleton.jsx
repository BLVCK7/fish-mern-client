import { Skeleton } from '@mui/material';
import React from 'react';

const BackSkeleton = () => {
  return (
    <>
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={420} height={120} />
      <Skeleton variant="rounded" width={420} height={120} />
    </>
  );
};

export default BackSkeleton;
