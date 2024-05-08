import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { creatMarkup } from './js/render-functions';
import { searchServiceImg } from './js/pixabay-api';

const refs = {
  formEl: document.querySelector('.form-search'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.formEl.addEventListener('submit', onSearchImg);
function onSearchImg(evt) {
  evt.preventDefault();
  const nameSearch = evt.target[0].value;
  refs.loader.classList.remove('loader-none');
  refs.gallery.innerHTML = '';
  searchServiceImg(nameSearch)
    .then(data => {
      if (creatMarkup(data.hits) == []) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
        });
      } else {
        refs.loader.classList.add('loader-none');
        refs.gallery.innerHTML = creatMarkup(data.hits);
        lightbox.refresh();
      }
    })
    .catch(er => {
      refs.loader.classList.add('loader-none');
    });
}

let lightbox = new SimpleLightbox('.gallery a', {
  animationSpeed: 1000,
  captionDelay: 250,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionText: 'description',
  history: false,
  swipeClose: true,
  close: true,
});
