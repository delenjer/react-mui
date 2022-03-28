import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { CardList } from "./CatalogList";
import { PaginationList } from '../PaginationList/PaginationList';
import { paginationParams, spinnerBox } from '../../helper/helper';
import { catalog } from '../../api/api';

export const Catalog = () => {
  const [ arts, setArts ] = useState([]);
  const [ isLoadImg, setLoadImg ] = useState(false);
  const [ isLoading, setLoading ] = useState(false);
  const [page, setPage] = React.useState(1);
  const [currPages, setCurrPages] = useState(0);
  const maxPages = 10000;
  const getItem = 10;
  const pageSIze = maxPages / getItem;
  const navigate = useNavigate();
  const params = useParams();

  useEffect( () => {
    setLoading(true);
    catalog(Number(paginationParams(params).currPages)).then(data => {
      const { artObjects } = data.data;

      setLoading(false);
      setArts(artObjects);
    }).catch(() => setArts([]));

  }, [currPages, params]);

  useEffect(() => {
    setPage(Number(paginationParams(params).page));
  }, [params]);

  const handlePaginationChange = (event, value) => {
    const result = value * getItem;

    if(value === 1) {
      setCurrPages(0);
      navigate("/1&0");
    } else {
      setCurrPages(result);
      navigate(`/${value}&${result}`);
    }
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
        page={page}
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