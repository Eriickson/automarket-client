import { ISession, IAuth } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface InitialState extends IAuth {}

const initialState = {
  isAuth: false,
} as InitialState;

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<IAuth>) {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
    },
  },
});

export const { setAuth } = authReducer.actions;
export default authReducer.reducer;
