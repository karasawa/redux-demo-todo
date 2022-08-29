import { createSlice } from "@reduxjs/toolkit";

export type DialogState = {
  isOpen: boolean;
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    isOpen: false,
  } as DialogState,
  reducers: {
    openDialog: (state) => {
      state.isOpen = true;
    },
    closeDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;
