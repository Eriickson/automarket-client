import { IOption } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInformationStep {
  brands: IOption[];
  vehicleCategories: IOption[];
  fuels: IOption[];
  transmissions: IOption[];
  tractions: IOption[];
  // cylinders: IOption;
  conditions: IOption[];
  colors: IOption[];
}

interface IListing {
  features: IOption;
}

interface IStep {
  information: IInformationStep;
  // listing: IListing;
}

interface InitialState {
  steps: IStep;
}

const initialState = {} as InitialState;

const newVehicle = createSlice({
  name: "newVehicle",
  initialState,
  reducers: {
    setNewVehicleInitialState(state, action: PayloadAction<IStep>) {
      state.steps = action.payload;
    },
  },
});

export const { setNewVehicleInitialState } = newVehicle.actions;
export default newVehicle.reducer;
