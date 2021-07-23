import { IFileAccepted, IOption } from "@/shared";
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

interface IImagesStep {
  images: IFileAccepted[];
}

interface IStep {
  information: IInformationStep;
  images: IImagesStep;
  // listing: IListing;
}

interface InitialState {
  steps: IStep;
}

const initialState = {
  steps: {
    images: {},
  },
} as InitialState;

const newVehicle = createSlice({
  name: "newVehicle",
  initialState,
  reducers: {
    setNewVehicleInitialState(state, action: PayloadAction<IStep>) {
      state.steps = action.payload;
    },
    setNewVehicle(state, actions: PayloadAction<IFileAccepted[]>) {
      state.steps?.images?.images
        ? (state.steps.images.images = [...state.steps.images.images, ...actions.payload])
        : (state.steps.images.images = actions.payload);
    },
    newVehicleRemoveImage(state, actions: PayloadAction<string>) {
      state.steps.images.images = state.steps.images.images.filter(({ id }) => actions.payload !== id);
    },
    newVehiclesResetImages(state) {
      state.steps.images.images = [];
    },
  },
});

export const { setNewVehicleInitialState, setNewVehicle, newVehiclesResetImages, newVehicleRemoveImage } =
  newVehicle.actions;
export default newVehicle.reducer;
