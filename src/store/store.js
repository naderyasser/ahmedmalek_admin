import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import statsSlice from "./statsSlice";
import authSlice from "./authSlice";
export const store = configureStore({
  reducer: {
    users: usersReducer,
    stats: statsSlice,
    auth: authSlice,
  },
});
