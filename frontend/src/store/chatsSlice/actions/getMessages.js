import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const getMessages = createAsyncThunk(
  'chats/getMessages',
  async ({chatId}) => {
    const messages = await api.chats.getMessages(chatId);
    return {messages};
  },
);

export default getMessages;
