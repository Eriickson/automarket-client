import { IGeneratedFile, IOption } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInformationStep {
  brands: IOption[];
  conditions: IOption[];
  vehicleCategories: IOption[];
  colors: IOption[];
  fuels: IOption[];
  tractions: IOption[];
  transmissions: IOption[];
}

interface IListing {
  features: IOption;
}

interface IImagesStep {
  images: IGeneratedFile[];
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
    setNewVehicleInitialState(state, action: PayloadAction<IInformationStep>) {
      state.steps.information = action.payload;
    },
    setNewVehicle(state, actions: PayloadAction<IGeneratedFile[]>) {
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
    newVehicleUpdateImage(state, { payload }: PayloadAction<IGeneratedFile>) {
      const newImages = state.steps.images.images.map(image => (image.id === payload.id ? payload : image));
      console.log(newImages);

      state.steps.images.images = newImages;
    },
  },
});

export const {
  setNewVehicleInitialState,
  setNewVehicle,
  newVehicleUpdateImage,
  newVehiclesResetImages,
  newVehicleRemoveImage,
} = newVehicle.actions;
export default newVehicle.reducer;
