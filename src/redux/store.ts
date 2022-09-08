import { configureStore } from '@reduxjs/toolkit';

// We'll use redux-logger just as an example of adding another middleware
import logger from 'redux-logger';

import toDoReducer from './features/todoSlice';
import userSlice from './features/userSlice';

export const store = configureStore({
  reducer: {
    // allows you create n number of sliders
    toDo: toDoReducer,
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
