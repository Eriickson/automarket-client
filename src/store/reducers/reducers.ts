import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import agency from "./agency.reducer";
import login from "./login.reducer";
import profile from "./profile.reducer";

export const rootReducer = combineReducers({ agency, login, profile });

export type RootStore = ReturnType<typeof rootReducer>;
