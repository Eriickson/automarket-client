import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isEditing: boolean;
}

const initialState = {} as InitialState;

const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleEditing(state) {
      state.isEditing = !state.isEditing;
    },
  },
});

export const { toggleEditing } = profileReducer.actions;

export default profileReducer.reducer;
