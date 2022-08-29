import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialog/dialogSlice";
import todoReducer from "./features/todo/todoSlice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    dialog: dialogReducer,
    todo: todoReducer,
  },
});
