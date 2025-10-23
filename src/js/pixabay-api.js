import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52781164-186021ddb033549fd762d563f';

export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios.get(BASE_URL, { params }).then(response => {
    return response.data;
  });
}
