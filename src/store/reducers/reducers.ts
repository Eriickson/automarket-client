import { combineReducers } from "@reduxjs/toolkit";

// Reducers
import login from "./login.reducer";
import profile from "./profile.reducer";

export const rootReducer = combineReducers({ login, profile });

export type RootStore = ReturnType<typeof rootReducer>;
