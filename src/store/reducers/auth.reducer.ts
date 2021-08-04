import { ISession } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isAuth: boolean;
  user?: ISession["user"];
}

const initialState = {
  isAuth: false,
} as InitialState;

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ isAuth: boolean; user?: ISession["user"] }>) {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    },
  },
});

export const { setAuth } = authReducer.actions;
export default authReducer.reducer;
