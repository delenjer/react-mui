import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { CardList } from "./CatalogList";
import { PaginationList } from '../PaginationList/PaginationList';
import { spinnerBox } from '../../helper/helper';
import {catalog} from '../../api/api';

export const Catalog = () => {
  const [ arts, setArts ] = useState([]);
  const [ isLoadImg, setLoadImg ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  const [currPages, setCurrPages] = useState(0);
  const maxPages = 10000;
  const getItem = 10;
  const pageSIze = maxPages / getItem;

  useEffect( () => {
    setLoading(true);
    catalog(currPages).then(data => {
      const { artObjects } = data.data;

      setLoading(false);
      setArts(artObjects);
    }).catch(() => setArts([]));

  }, [currPages]);

  const handlePaginationChange = (event, value) => {
    const result = value * getItem;

    value === 1 ? setCurrPages(0) : setCurrPages(result);
  };

  return (
    <>
      <CardList
        arts={[]}
        isLoadImg={isLoadImg}
        setLoadImg={setLoadImg}
      />

      {
        isLoading  ? (
          <Box sx={spinnerBox}>
            <CircularProgress />
          </Box>
          ) : (
            <CardList
              arts={arts}
              isLoadImg={isLoadImg}
              setLoadImg={setLoadImg}
            />
          )
      }

      <PaginationList
        pageSIze={pageSIze}
        handlePaginationChange={handlePaginationChange}
      />
    </>
  );
}

Catalog.defaultProps = {
  arts: undefined,
};

Catalog.propTypes = {
  arts: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  pageSIze: PropTypes.number,
  handlePaginationChange: PropTypes.func,
  handleClick: PropTypes.func,
}