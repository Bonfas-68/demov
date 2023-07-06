import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: null,
  },
  reducers: {
    create: (state, action) => {
      state.todos.push(action.payload);
    },
    fetchTodos: (state, action) => {
      state.todos = action.payload;
    },
    update: (state, action) => {
      state.todos[
        state.todos.findIndex((todoVal) => todoVal.id === action.payload.id)
      ] = action.payload.todos;
    },
    deleteTodo: (state, action) => {
      state.todos.splice(
        state.todos.findIndex((todo) => todo.id === action.payload),
        1
      );
    },
  },
});
export const { create, fetchTodos, update, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
