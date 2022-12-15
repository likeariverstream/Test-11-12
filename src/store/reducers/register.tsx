import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "../thunks/register";
import { TRegisterInitialState } from "../../utils/types";

const initialState: TRegisterInitialState = {
  id: null,
  token: "",
  isRegistred: !!localStorage.getItem('token')
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isRegistred = false;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(registerThunk.pending.match, (state) => {
      state.isRegistred = false;
    })
    builder.addMatcher(registerThunk.fulfilled.match, (state, action) => {
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isRegistred = true;
    })
    builder.addMatcher(registerThunk.rejected.match, (state) => {
      state.isRegistred = false;
    })
  }
})

export const registerReducer = registerSlice.reducer;

export const { logoutUser } = registerSlice.actions;
