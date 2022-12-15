import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { registerReducer } from "./reducers/register";
import { usersReducer } from "./reducers/users";

export const rootReducer = combineReducers({
  register: registerReducer,
  users: usersReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    thunk
  ],
  devTools: true
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
