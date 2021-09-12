import { Branch, IGeneratedImage, Option } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInformationStep {
  accesories: Option[];
  brands: Option[];
  conditions: Option[];
  vehicleCategories: Option[];
  colors: Option[];
  fuels: Option[];
  tractions: Option[];
  transmissions: Option[];
  features: Option[];
  additions: Option[];
  branches: Branch[];
}

interface IListing {
  features: Option;
}

interface IImagesStep {
  images: IGeneratedImage[];
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
    setNewVehicle(state, actions: PayloadAction<IGeneratedImage[]>) {
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
    newVehicleUpdateImage(state, { payload }: PayloadAction<IGeneratedImage>) {
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
