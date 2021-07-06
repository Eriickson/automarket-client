import { IOption } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  new: {
    agencyData: {
      name: string;
      slogan: string;
      isProfessional: boolean;
    };
    ubication: {
      province: IOption;
      municipality: IOption;
      sector: IOption;
      reference: string;
    };
  };
  exampeSelect: IOption;
}

const initialState = {
  new: {},
} as InitialState;

const agencyReducer = createSlice({
  name: "agency",
  initialState,
  reducers: {
    setNewAgencyInfo(state, action: PayloadAction<InitialState["new"]>) {
      state.new = action.payload;
    },
    setExampleSelect(state, action: PayloadAction<IOption>) {
      state.exampeSelect = action.payload;
    },
  },
});

export const { setNewAgencyInfo, setExampleSelect } = agencyReducer.actions;
export default agencyReducer.reducer;
