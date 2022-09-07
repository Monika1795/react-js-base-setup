import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialToDoState } from '../../types/todo';

const initialState: initialToDoState = {
  todoList: [
    { id: 1, content: 'Cook Food' },
    { id: 2, content: 'Meet React Team' },
  ],
};

export const toDoSlider = createSlice({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action: PayloadAction<{newContent: string}>) => {
      const newTodoList = {
        id: Math.random(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action: PayloadAction<{id:number}>) => {
      const { todoList } = state;

      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action:PayloadAction<{content: string, id: number}>) => {
      const { todoList } = state;
      state.todoList = todoList.map((item) => (item.id === action.payload.id ? action.payload : item));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToDo, deleteToDo, editTodo } = toDoSlider.actions;
export default toDoSlider.reducer;
