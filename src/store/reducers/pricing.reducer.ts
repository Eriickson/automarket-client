import { Plan } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  ping: string;
  plans: Plan[];
}

const initialState = {} as InitialState;

const pricingReducer = createSlice({
  name: "pricing",
  initialState,
  reducers: {
    setPlans(state, action: PayloadAction<Plan[]>) {
      state.plans = action.payload;
    },
  },
});

export const { setPlans } = pricingReducer.actions;

export default pricingReducer.reducer;
