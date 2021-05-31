import axios from 'axios';
import { showError } from '../Global/RequestResponseHandler';

const swapi = axios.create({
  baseURL: process.env.REACT_APP_SWAPI_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

swapi.interceptors.response.use((response) => response,
  (error) => {
    showError('Error. Try again later.');
    return Promise.reject(error);
  });

export const getInfoFromUrl = (url) => axios.get(url);

export const searchCharacter = (query) => swapi.get(`people/?search=${query}`);

export const getAllCharacters = () => swapi.get('people');

export default swapi;
