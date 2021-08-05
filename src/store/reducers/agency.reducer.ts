import { IGeneratedImage, INumberPhone, IOption } from "@/shared";
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
    contacts: {
      numbersPhone: INumberPhone[];
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
      state.new = { ...state.new, ...action.payload };
    },
    setExampleSelect(state, action: PayloadAction<IOption>) {
      state.exampeSelect = action.payload;
    },
  },
});

export const { setNewAgencyInfo, setExampleSelect } = agencyReducer.actions;
export default agencyReducer.reducer;
