import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { imgCard, skeletonStyle, titleCard } from '../../helper/helper';
import Skeleton from '@mui/material/Skeleton';

export const Card = ({ art, isLoadImg, setLoadImg }) => {

  useEffect(() => {
    const images = [...document.querySelectorAll('.card-img')];

    if(images) {
      return images.every(image => image.addEventListener("load", () => setLoadImg(true)));
    }

    return () => images.every(image => image.addEventListener("load", () => setLoadImg(true)));
  }, [setLoadImg]);

  return (
    <div>
      <Typography
        variant="h5"
        sx={titleCard}
      >
        {art.title}
      </Typography>

      <Link
        to={`details/${art.objectNumber}`}
        className="card-link"
      >
        <div className={!isLoadImg ? 'img-box img-box-height' : 'img-box'}>
          <img
            src={!art.webImage ? '' : `${art.webImage.url}`}
            alt={art.title}
            loading="lazy"
            style={imgCard}
            className="card-img"
          />

          {!isLoadImg && <Skeleton variant="rectangular" sx={skeletonStyle} />}
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  webImage: PropTypes.object,
  url: PropTypes.string,
  objectNumber: PropTypes.string,
  isLoadImg: PropTypes.bool,
  setLoadImg: PropTypes.func,
  handleClick: PropTypes.func,
}