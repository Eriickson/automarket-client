import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  isAuth: boolean;
}

const initialState = {
  isAuth: false,
} as InitialState;

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { setAuth } = authReducer.actions;
export default authReducer.reducer;
