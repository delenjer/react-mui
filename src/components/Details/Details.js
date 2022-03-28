import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams  } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';

import { catalogDetails } from '../../api/api';
import {iconBox, spinnerBox} from '../../helper/helper';
import { DetailsContent } from './DetailsContent';
import CircularProgress from '@mui/material/CircularProgress';

export const Details = () => {
  const [ details, setDetails ] = useState({});
  const [ isLoading, setLoading ] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    setLoading(true);
    catalogDetails(id)
      .then(data => {
        setDetails(data);
        setLoading(false);
      })
      .catch(() => setDetails({}));
  }, [id]);

  return (
    <div className="container">
      <Box component="div" mb={6}>
        <Link to="/" className="link-back">
          <Box sx={iconBox} component="span">
            <ArrowBackIcon />
          </Box>

          Back
        </Link>
      </Box>
      {
        isLoading ? (
          <Box sx={spinnerBox}>
            <CircularProgress />
          </Box>
        ) : (
          <DetailsContent detail={details.data} />
        )
      }
    </div>
  );
}

Details.propTypes = {
  objectNumber: PropTypes.string,
}