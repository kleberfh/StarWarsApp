import axios from 'axios';
import { get } from 'lodash';
import { showError } from '../Global/RequestResponseHandler';

const database = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

database.interceptors.response.use((response) => response,
  (error) => {
    if (get(error, 'response.status') !== 404) {
      showError('An error occurred while processing your request.');
    }
    return Promise.reject(error);
  });

export const getFavoritesCharacter = () => database.get('favorite/character');

export const setFavoriteCharacter = (data) => database.post('favorite/character', data);

export const findFavoriteCharacter = (name) => database.post('favorite/character/find', {
  name,
});

export const removeFavoriteCharacter = (id) => database.delete(`favorite/character/${id}`);

export default database;
