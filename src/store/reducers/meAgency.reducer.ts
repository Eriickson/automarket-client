import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  tabs: {
    ubication: {
      isEditing: boolean;
    };
  };
}

const initialState = {
  tabs: {
    ubication: {
      isEditing: false,
    },
  },
} as InitialState;

const meAgency = createSlice({
  name: "meAgency",
  initialState,
  reducers: {
    toggleMyAgencyUbicationEdit(state) {
      state.tabs.ubication.isEditing = !state.tabs.ubication.isEditing;
    },
  },
});

export const { toggleMyAgencyUbicationEdit } = meAgency.actions;

export default meAgency.reducer;
