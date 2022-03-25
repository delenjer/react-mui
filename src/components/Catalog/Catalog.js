import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { catalog } from "../../api/api";
import { CatalogList } from "./CatalogList";


export const Catalog = () => {
  const [arts, setArts] = useState([]);

  useEffect( () => {
    catalog.then(data => {
      const { artObjects } = data.data;

      setArts(artObjects);
    }).catch(() => setArts([]));

  }, []);


  return (
    <CatalogList arts={arts} />
  );
}

Catalog.defaultProps = {
  arts: undefined,
};

Catalog.propTypes = {
  arts: PropTypes.arrayOf(PropTypes.object),
}