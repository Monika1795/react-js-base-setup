import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Geneerates pending , fulfilled and rejected action type
// eslint-disable-next-line import/prefer-default-export
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => axios
  .get('https://gorest.co.in/public/v2/users')
  .then((response) => response.data));
