// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// Define a type for the slice state
interface AppState {
  value: number;
  modalOpen: boolean;
}

// Define the initial state using that type
const initialState: AppState = {
  value: 0,
  modalOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    //   },
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export const { closeModal, openModal } = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const modalState = (state: RootState) => state.app.modalOpen;

export default appSlice.reducer;
