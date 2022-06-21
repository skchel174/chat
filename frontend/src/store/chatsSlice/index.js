import {createSlice} from "@reduxjs/toolkit";
import getChats from "./getChats";
import getMessages from "./getMessages";
import addMessage from "./addMessage";

const chatsSlice = createSlice({
  name: "chats",

  initialState: {
    data: [],
    selectedChat: null,
    chatsStatus: null,
    messagesStatus: null,
  },

  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload.id;
    },
  },

  extraReducers: {
    // Chats
    [getChats.pending]: (state) => {
      state.chatsStatus = "pending";
    },

    [getChats.fulfilled]: (state, action) => {
      state.chatsStatus = "fulfilled";
      state.data = action.payload.chats;
    },

    // Messages
    [getMessages.pending]: (state) => {
      state.messagesStatus = "pending";
    },

    [getMessages.fulfilled]: (state, action) => {
      const chat = state.data.find(chat => chat.id === state.selectedChat);
      chat.messages = [...action.payload.messages, ...chat.messages];
      state.messagesStatus = "fulfilled";
    },

    [getMessages.rejected]: (state, action) => {
      state.messagesStatus = "rejected";
      console.log(action);
    },

    // Add message
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
