import React from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { paginationBox } from '../../helper/helper';

export const PaginationList = ({ pageSIze, handlePaginationChange }) => {

  return (
    <Box component="div" sx={paginationBox}>
      <Stack spacing={2}>
        <Pagination count={pageSIze} color="primary" onChange={handlePaginationChange} />
      </Stack>
    </Box>
  );
}
