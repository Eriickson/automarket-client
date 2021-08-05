import { IGeneratedImage, IOption } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  new: {
    agencyData: {
      logo: Partial<Omit<IGeneratedImage, "file">>;
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
    setNewAgencyInfo(state, action: PayloadAction<Partial<InitialState["new"]>>) {
      state.new = { ...action.payload, ...state.new };
    },
    setExampleSelect(state, action: PayloadAction<IOption>) {
      state.exampeSelect = action.payload;
    },
  },
});

export const { setNewAgencyInfo, setExampleSelect } = agencyReducer.actions;
export default agencyReducer.reducer;
