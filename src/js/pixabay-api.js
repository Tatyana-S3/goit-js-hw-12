import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '52781164-186021ddb033549fd762d563f';
export const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(BASE_URL, { params });

  return response.data;
}
