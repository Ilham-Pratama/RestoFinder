import axios from 'axios';
import { YELP_API_TOKEN } from 'react-native-dotenv';

export const BASE_API_URL = 'https://api.yelp.com/v3';

export const apiClient = axios.create({
  baseURL: BASE_API_URL,
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${YELP_API_TOKEN}`
  }
});
