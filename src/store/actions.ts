import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// actions
import * as loginAction from "./reducers/login.reducer";
import * as profileAction from "./reducers/profile.reducer";
import * as agencyAction from "./reducers/agency.reducer";
import * as meAgency from "./reducers/meAgency.reducer";
import * as newVehicle from "./reducers/newVehicle.reducer";
import * as auth from "./reducers/auth.reducer";
import * as pricing from "./reducers/pricing.reducer";

// eslint-disable-next-line
export function useAction() {
  const dispatch = useDispatch();

  return bindActionCreators(
    { ...agencyAction, ...loginAction, ...profileAction, ...meAgency, ...newVehicle, ...auth, ...pricing },
    dispatch,
  );
}
