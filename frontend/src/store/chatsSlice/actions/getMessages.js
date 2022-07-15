import {createAsyncThunk} from "@reduxjs/toolkit";
import api from "api";

const getMessages = createAsyncThunk(
  'chats/getMessages',
  async (_, {getState}) => {
    const state = getState();
    const chat = state.chats.data[state.chats.chatIdx];
    const messages = await api.chats.getMessages(chat.id);

    return {messages};
  },
);

export default getMessages;
