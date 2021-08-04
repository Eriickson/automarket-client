import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import agency from "./agency.reducer";
import login from "./login.reducer";
import profile from "./profile.reducer";
import meAgency from "./meAgency.reducer";
import newVehicle from "./newVehicle.reducer";
import auth from "./auth.reducer";

export const rootReducer = combineReducers({ agency, login, profile, meAgency, newVehicle, auth });

export type RootStore = ReturnType<typeof rootReducer>;
