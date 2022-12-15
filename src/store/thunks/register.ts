import { request } from "../../utils/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../utils/constants";
import {
  defineEmail,
  definePassword
} from "../../utils/constants";
import { TUsersRegisterThunk } from "../../utils/types";

export const registerThunk = createAsyncThunk(
  'register/request',
  async (user: TUsersRegisterThunk) => {
    const email = defineEmail;
    const password = definePassword;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    }
    try {
      const data = await request(config.register.url, options);
      const { token } = data;
      localStorage.setItem('token', token)
      return data;
    } catch (err) {
      return console.warn(err);
    }
  }
)

