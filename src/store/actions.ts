import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

// actions
import * as loginAction from "./reducers/login.reducer";

// eslint-disable-next-line
export function useAction() {
  const dispatch = useDispatch();

  return bindActionCreators({ ...loginAction }, dispatch);
}
