import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// actions
import * as loginAction from "./reducers/login.reducer";
import * as profileAction from "./reducers/profile.reducer";

// eslint-disable-next-line
export function useAction() {
  const dispatch = useDispatch();

  return bindActionCreators({ ...loginAction, ...profileAction }, dispatch);
}
