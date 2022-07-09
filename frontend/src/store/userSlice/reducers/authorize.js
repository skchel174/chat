import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const authorize = createAsyncThunk(
  "user/authorize",
  async ({token}) => {
    const data = await api.user.getByToken(token);

    return {
      user: data,
    };
  }
);

export default authorize;
