import React from 'react';
import PropTypes from 'prop-types';

import Masonry from '@mui/lab/Masonry';
import Typography from "@mui/material/Typography";



export const CatalogList = ({ arts }) => {
  return (
    <Masonry
      columns={4}
      spacing={2}
    >
      {arts.map(art => (
        <div key={art.id}>
          <Typography
            variant="h5"
            sx={{
              boxShadow: ' 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '4px 4px 0 0'
            }}
          >
            {art.title}
          </Typography>

          <img
            src={`${art.webImage.url}`}
            alt={art.title}
            loading="lazy"
            style={{
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
              display: 'block',
              width: '100%',
            }}
          />
        </div>
      ))}
    </Masonry>
  );
}
