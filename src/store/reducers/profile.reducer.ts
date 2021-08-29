import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, User } from "@/shared";

interface InitialState {
  isEditing: boolean;
  profileMe: User;
}

const initialState = {} as InitialState;

const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleEditing(state) {
      state.isEditing = !state.isEditing;
    },
    setProfileMe(state, action: PayloadAction<User>) {
      state.profileMe = action.payload;
    },
  },
});

export const { toggleEditing, setProfileMe } = profileReducer.actions;

export default profileReducer.reducer;
