import {createSlice} from "@reduxjs/toolkit";
import getChats from "./getChats";
import getMessages from "./getMessages";
import addMessage from "./addMessage";

const chatsSlice = createSlice({
  name: "chats",

  initialState: {
    data: [],
    chat: null,
    selectedChat: null,
    chatsRequestStatus: null,
    messagesRequestStatus: null,
  },

  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload.id;
      state.chat = state.data.find(chat => chat.id === action.payload.id);
    },
  },

  extraReducers: {
    // Chats
    [getChats.pending]: (state) => {
      state.chatsRequestStatus = "pending";
    },

    [getChats.fulfilled]: (state, action) => {
      state.chatsRequestStatus = "fulfilled";
      state.data = action.payload.chats;
    },

    // Messages
    [getMessages.pending]: (state) => {
      state.messagesRequestStatus = "pending";
    },

    [getMessages.fulfilled]: (state, action) => {
      const chat = state.data.find(chat => chat.id === action.payload.chatId);
      chat.messages = [...action.payload.messages, ...(chat.messages ?? [])];
      state.messagesRequestStatus = "fulfilled";
    },

    [addMessage.fulfilled]: (state, action) => {
      const chat = state.data.find(chat => chat.id === state.selectedChat);
      chat.messages.push(action.payload.message);
    },
  },
});

export const {
  setSelectedChat,
} = chatsSlice.actions;

export default chatsSlice.reducer;
