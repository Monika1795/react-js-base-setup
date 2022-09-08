import axios from 'axios';
import { getAccessToken } from '../utils/storage';

// get session token
const accessToken: string = getAccessToken() || '';

// axios instance for api methods
export default axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_URL}/`,
  headers: {
    'Content-type': 'application/json',
    'x-access-token': accessToken,
  },
});
