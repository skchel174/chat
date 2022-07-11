import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const login = createAsyncThunk(
  "user/login",
  async ({login, password, remember}) => {
    const data = await api.user.login(login, password);
    return {data};
  }
);

export default login;
