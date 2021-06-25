import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import login from "./login.reducer";

export const rootReducer = combineReducers({ login });

export type RootStore = ReturnType<typeof rootReducer>;
