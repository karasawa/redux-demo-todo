import { createSlice } from "@reduxjs/toolkit";

export type TodoState = {
  content: string[];
  count: number;
};

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    content: [],
    count: 0,
  } as TodoState,
  reducers: {
    addTodo: (state, action) => {
      state.content.push(action.payload);
      state.count = state.content.length;
    },
    deleteTodo: (state, action) => {
      state.content.splice(action.payload, 1);
      state.count = state.content.length;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
