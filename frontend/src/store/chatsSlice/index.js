import {createSlice} from "@reduxjs/toolkit";
import getChats from "./actions/getChats";
import getMessages from "./actions/getMessages";

const chatsSlice = createSlice({
  name: "chats",

  initialState: {
    data: [],
    chat: null,
    selectedChat: null,
    requestStatus: null,
  },

  reducers: {
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload.id;
      state.chat = state.data.find(chat => chat.id === action.payload.id);
    },

    addMessage: (state, action) => {
      const idx = state.data.findIndex(chat => chat.id === state.selectedChat);
      state.data[idx].messages.push(action.payload.message);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.requestStatus = "chats.pending";
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.requestStatus = "chats.fulfilled";
        state.data = action.payload.chats;
      })

      .addCase(getMessages.pending, (state) => {
        state.requestStatus = "messages.pending";
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        const chat = state.data.find(chat => chat.id === action.payload.chatId);
        chat.messages = [...action.payload.messages, ...(chat.messages ?? [])];
        state.requestStatus = "messages.fulfilled";
      })
  },
});

export const {
  setSelectedChat,
  addMessage,
} = chatsSlice.actions;

export default chatsSlice.reducer;
