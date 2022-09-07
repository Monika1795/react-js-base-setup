import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../../services/user.service';
import { InitialState, User } from '../../types/users';

const initialState: InitialState = {
  loading: false,
  error: '',
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = '';
      },
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || 'Something went wrong ';
    });
  },
});

export default userSlice.reducer;
