import { AuthPayload } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* eslint-disable @typescript-eslint/no-empty-interface */
interface InitialState extends AuthPayload {}

const initialState = {
  isAuth: false,
} as InitialState;

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthPayload>) {
      state.isAuth = action.payload.isAuth;
      state.user = action.payload.user;
      state.agency = action.payload.agency;
    },
  },
});

export const { setAuth } = authReducer.actions;
export default authReducer.reducer;
