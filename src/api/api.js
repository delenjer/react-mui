import axios from "axios";

const BASE_URL = 'https://www.rijksmuseum.nl/api/en/collection?key=a7LmWCcH';
const DETAILS_URL = 'https://www.rijksmuseum.nl/api/nl/collection/';

export const catalog = (currPages) => (
  axios({
    method: 'get',
    url: `${BASE_URL}&ps=50&p=${currPages}`,
    responseType: 'json'
  })
);

export const catalogDetails = (id) => (
  axios({
    method: 'get',
    url: `${DETAILS_URL}${id}?key=a7LmWCcH`,
    responseType: 'json'
  })
);
