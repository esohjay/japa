// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

// Define a type for the slice state
interface AppState {
  value: number;
  modalOpen: boolean;
  modalIndex: number;
  searchScreenOpen: boolean;
}

// Define the initial state using that type
const initialState: AppState = {
  value: 0,
  modalOpen: false,
  modalIndex: 1,
  searchScreenOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<number>) => {
      state.modalOpen = true;
      state.modalIndex = action.payload;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
    modalIndex: (state, action: PayloadAction<number>) => {
      state.modalIndex = action.payload;
    },
    openSearchScreen: (state) => {
      state.searchScreenOpen = true;
    },
    closeSearchScreen: (state) => {
      state.searchScreenOpen = false;
    },
  },
});

export const {
  closeModal,
  openModal,
  modalIndex,
  openSearchScreen,
  closeSearchScreen,
} = appSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const modalState = (state: RootState) => state.app.modalOpen;
export const selectModalIndex = (state: RootState) => state.app.modalIndex;
export const selectSearchScreenState = (state: RootState) =>
  state.app.searchScreenOpen;

export default appSlice.reducer;
