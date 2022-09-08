import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDataApi } from '../../api/methods';

// Geneerates pending , fulfilled and rejected action type
// eslint-disable-next-line import/prefer-default-export
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => getDataApi({ path: 'https://gorest.co.in/public/v2/users' }).then(
  (response: any) => response.data,
));
