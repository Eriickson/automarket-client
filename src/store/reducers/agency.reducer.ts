import { Agency, IGeneratedImage, INumberPhone, IOption, Option } from "@/shared";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  new: {
    agencyData: {
      logo: IGeneratedImage;
      name: string;
      slogan: string;
      isProfessional: boolean;
    };
    ubication: {
      province: Option;
      municipality: Option;
      sector: Option;
      reference: string;
    };
    contacts: {
      numbersPhone: INumberPhone[];
    };
  };
  exampeSelect: Option;
  myAgency: Agency;
}

const initialState = {
  new: {},
} as InitialState;

const agencyReducer = createSlice({
  name: "agency",
  initialState,
  reducers: {
    setNewAgencyInfo(state, action: PayloadAction<Partial<InitialState["new"]>>) {
      state.new = { ...state.new, ...action.payload };
    },
    setExampleSelect(state, action: PayloadAction<Option>) {
      state.exampeSelect = action.payload;
    },
    setMyAgency(state, action: PayloadAction<Agency>) {
      state.myAgency = action.payload;
    },
  },
});

export const { setNewAgencyInfo, setExampleSelect, setMyAgency } = agencyReducer.actions;
export default agencyReducer.reducer;
