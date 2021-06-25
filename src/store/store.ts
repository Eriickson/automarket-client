import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import { RootStore, rootReducer } from "./reducers/reducers";
import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

// const logger = createLogger({
//   predicate: () => process.env.NODE_ENV === "development" && typeof window !== "undefined",
// });

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [...customizedMiddleware /* logger */] as const,
});

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useStore = () => ({ store });
export const useSelector: TypedUseSelectorHook<RootStore> = _useSelector;
