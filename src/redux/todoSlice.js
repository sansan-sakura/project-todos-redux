import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        completed: false,
        due: action.payload.due,
      };
      const newTodos = state.push(newTodo);
      const localtodos = localStorage.getItem("todo");
      console.log(JSON.parse(localStorage.getItem("todo")), "local");
      localStorage.setItem("todo", JSON.stringify(newTodos));
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
