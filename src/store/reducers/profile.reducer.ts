import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@/shared";

interface InitialState {
  isEditing: boolean;
  profileMe: IUser;
}

const initialState = {
  profileMe: {
    profilePicture: "",
    name: "",
    lastname: "",
    birthday: "",
    username: "",
    direction: {
      province: {
        label: "",
        value: "",
      },
      municipality: {
        label: "",
        value: "",
      },
    },
  },
} as InitialState;

const profileReducer = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleEditing(state) {
      state.isEditing = !state.isEditing;
    },
    setProfileMe(state, action: PayloadAction<IUser>) {
      state.profileMe = action.payload;
    },
  },
});

export const { toggleEditing, setProfileMe } = profileReducer.actions;

export default profileReducer.reducer;
