import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { paginationBox } from '../../helper/helper';

export const PaginationList = ({ pageSIze, handlePaginationChange, page }) => {

  return (
    <Box component="div" sx={paginationBox}>
      <Stack spacing={2}>
        <Pagination
          count={pageSIze}
          page={!page ? 1 : page}
          color="primary"
          onChange={handlePaginationChange}
        />
      </Stack>
    </Box>
  );
}

PaginationList.propTypes = {
  pageSIze: PropTypes.number,
  handlePaginationChange: PropTypes.func,
  page: PropTypes.number,
}
