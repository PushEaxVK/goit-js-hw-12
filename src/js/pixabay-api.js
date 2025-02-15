import axios from 'axios';

const API_KEY = '48710632-74e9a639a0cf21f0899e63b1f';
const BASE_URL = 'https://pixabay.com/api/';

// key — твій унікальний ключ доступу до API.
// q — слово для пошуку. Те, що буде вводити користувач.
// image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
// orientation — орієнтація фотографії. Постав значення horizontal.
// safesearch — фільтр за віком. Постав значення true.

export function searchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  return axios
    .get(BASE_URL, { params })
    .then(response => {
      return response.data.hits;
    })
    .catch(error => {
      console.log(error);
    });
}
