import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const getMessages = createAsyncThunk(
  'chats/getMessages',
  async (_, {rejectWithValue}) => {
    try {
      const messages = await api.chats.getMessages();

      return {
        messages,
      };
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

export default getMessages;
