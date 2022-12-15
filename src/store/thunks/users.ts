import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/utils";
import { config } from "../../utils/constants";

export const getUsersThunk = createAsyncThunk(
  'users/load',
  async () => {
    try {
      const data = await request(config.users.url);
      console.log(data)
      return data
    } catch (err) {
      return console.warn(err);
    }
  }
)
