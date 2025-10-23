import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  scrollNextPart,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector("input[name ='search-text']");
const loadMoreBtn = document.querySelector('.load.btn');

input.removeAttribute('required');

form.addEventListener('submit', handlerSubmitForm);
loadMoreBtn.addEventListener('click', loadMoreImages);

let page = 1;
let totalPages = 0;
let currentQuery = '';

async function loadImages() {
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    if (page === 1) {
      totalPages = Math.ceil(data.totalHits / PER_PAGE);

      if (!data.hits.length) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          theme: 'dark',
          backgroundColor: 'red',
          messageSize: '16',
          timeout: 5000,
        });
        hideLoadMoreButton();
        return;
      }
    }

    createGallery(data.hits);

    if (page > 1) {
      scrollNextPart();
    }

    if (page < totalPages) {
      showLoadMoreButton();
    } else if (page === totalPages) {
      hideLoadMoreButton();

      if (data.hits.length > 0) {
        iziToast.info({
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
          theme: 'dark',
          backgroundColor: 'blue',
          messageSize: '16',
          timeout: 5000,
        });
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
      position: 'topRight',
      theme: 'dark',
      backgroundColor: 'red',
      timeout: 5000,
    });
  } finally {
    hideLoader();
  }
}

async function handlerSubmitForm(event) {
  event.preventDefault();

  const query = input.value.trim().toLowerCase();

  if (!query) {
    iziToast.warning({
      message: 'Please enter a search term!',
      position: 'topRight',
      theme: 'dark',
      backgroundColor: 'red',
    });
    return;
  }

  page = 1;
  totalPages = 0;
  currentQuery = query;
  clearGallery();

  await loadImages();

  form.reset();
}

async function loadMoreImages() {
  page++;
  await loadImages();
}
