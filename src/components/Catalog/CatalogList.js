import React from 'react';

import Masonry from '@mui/lab/Masonry';

import { Card } from './Card';

export const CardList = ({ arts, isLoadImg, setLoadImg }) => (
  <Masonry
    columns={4}
    spacing={2}
  >
    {arts.map(art => (
      <Card
        key={art.id}
        art={art}
        isLoadImg={isLoadImg}
        setLoadImg={setLoadImg}
      />
    ))}
  </Masonry>
);
