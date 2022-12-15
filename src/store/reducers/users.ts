import { createSlice } from "@reduxjs/toolkit";
import { getUsersThunk } from "../thunks/users";
import { TUsersInitialState } from "../../utils/types";

const initialState: TUsersInitialState = {
  isGetted: false,
  page: null,
  data: []
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(getUsersThunk.pending.match, (state) => {
      state.isGetted = false
    })
    builder.addMatcher(getUsersThunk.fulfilled.match, (state, action) => {
      state.isGetted = true;
      if (action.payload.page === 1) {
        state.page = action.payload.page;
        state.data = action.payload.data;
      }
      if (action.payload.page !== 1) {
        state.page = action.payload.page;
        state.data = [...state.data, ...action.payload.data];
      }
    })
    builder.addMatcher(getUsersThunk.rejected.match, (state) => {
      state.isGetted = false
    })
  }
})

export const usersReducer = usersSlice.reducer;
