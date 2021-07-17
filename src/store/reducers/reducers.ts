import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import agency from "./agency.reducer";
import login from "./login.reducer";
import profile from "./profile.reducer";
import meAgency from "./meAgency.reducer";

export const rootReducer = combineReducers({ agency, login, profile, meAgency });

export type RootStore = ReturnType<typeof rootReducer>;
