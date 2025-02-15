'use strict';

import { searchImages } from './js/pixabay-api.js';
import {
  showErrorMessage,
  renderAllCards,
  renderAppendCards,
} from './js/render-functions.js';

const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('.form-input'),
  button: document.querySelector('.form-button'),
  gallery: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', handleFormSubmitAsync);
refs.loader.style.display = 'none';

let searchQuery = '';
let page = 1;

// handleFormSubmit в форматі async/await
async function handleFormSubmitAsync(event) {
  event.preventDefault();
  const value = event.currentTarget.elements.search.value.trim();
  if (!value) {
    showErrorMessage('Enter some value');
    return;
  }
  searchQuery = value;
  page = 1;
  renderAllCards(refs.gallery, []);
  refs.loader.style.display = 'block';
  try {
    const data = await searchImages(value);
    refs.loader.style.display = 'none';
    if (data.length === 0) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      renderAllCards(refs.gallery, data);
    }
  } catch (error) {
    refs.loader.style.display = 'none';
    showErrorMessage('Sorry, something went wrong. Please try again!');
  }
}
