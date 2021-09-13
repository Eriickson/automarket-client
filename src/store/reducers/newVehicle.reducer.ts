import { Branch, IGeneratedImage, Option } from "@/shared";
import { NewVehicleInformationFormOnSubmit } from "@/validations";
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
  newVehicleData: NewVehicleInformationFormOnSubmit;
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
      state.steps.images.images = newImages;
    },
    setNewVehicleData(state, { payload }: PayloadAction<NewVehicleInformationFormOnSubmit>) {
      state.steps.newVehicleData = payload;
    },
  },
});

export const {
  setNewVehicleInitialState,
  setNewVehicle,
  newVehicleUpdateImage,
  newVehiclesResetImages,
  newVehicleRemoveImage,
  setNewVehicleData,
} = newVehicle.actions;
export default newVehicle.reducer;
