import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  register: {
    email: string;
  };
}

const initialState = {
  register: {
    email: "",
  },
} as InitialState;

const loginReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmailNewUser(state, action: PayloadAction<string>) {
      state.register.email = action.payload;
    },
  },
});

export const { setEmailNewUser } = loginReducer.actions;
export default loginReducer.reducer;
