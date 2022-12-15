import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/utils";
import { config } from "../../utils/constants";

export const getUsersThunk = createAsyncThunk(
  'users/load',
  async (page: number) => {
    try {
      const data = await request(`${config.users.url}${config.users.endPoint}${page}`);
      console.log(data)
      return data
    } catch (err) {
      return console.warn(err);
    }
  }
)
