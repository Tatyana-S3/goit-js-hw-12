import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load.btn');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  close: true,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
  <li class='gallery-item'>
  <a href='${largeImageURL}'>
  <img src='${webformatURL}' alt='${tags}' />
  </a>
  <div class='info'>
  <p class='info-item'><b>Likes:</b> ${likes}</p>
  <p class='info-item'><b>Views:</b> ${views}</p>
  <p class='info-item'><b>Comments:</b> ${comments}</p>
  <p class='info-item'><b>Downloads:</b> ${downloads}</p>
  </div>
  </li>
  `
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
export function clearGallery() {
  galleryList.innerHTML = '';
}
export function showLoader() {
  loader.classList.add('visible');
}
export function hideLoader() {
  loader.classList.remove('visible');
}
export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}
export function scrollNextPart() {
  const firstNewCard = document.querySelector('.gallery-item');

  if (firstNewCard) {
    const cardHeight = firstNewCard.getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}
