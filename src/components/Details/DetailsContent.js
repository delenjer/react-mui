import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { imgBox, text } from '../../helper/helper';

export const DetailsContent = ({ detail }) => {
  if(!detail) return null;

  const { artObject } = detail;

  return (
    <Box component="div">
      <Typography variant="h2" component="h2" sx={{color: '#fff'}}>
        {artObject.longTitle}
      </Typography>

      <Typography
        variant="p"
        component="p"
        mt={2}
        sx={text}
      >
        {artObject.description}
      </Typography>

      <Box component="div" mt={5} sx={imgBox}>
        <img
          src={artObject.webImage.url}
          alt={artObject.title}
          className="details-img"
        />
      </Box>
    </Box>
  );
}

DetailsContent.propTypes = {
  longTitle: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  webImage: PropTypes.object,
  url: PropTypes.string,
}