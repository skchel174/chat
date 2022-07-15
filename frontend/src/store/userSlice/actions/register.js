import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const register = createAsyncThunk(
  "user/register",
  async ({email, login, name, password}) => {
    const data = await api.user.register(email, login, name, password);
    return {data};
  }
);

export default register;
