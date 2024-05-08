const key = '42801696-74e6805803c5f99662f25fde0';
export function searchServiceImg(nameSearch) {
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
      key,
      q: nameSearch,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });
    return fetch(`${BASE_URL}?${params}`).then(response => {
      if (!response.ok) {
        throw new Error('404 not found!');
      }
      return response.json();
    });
  }