import {createSlice} from "@reduxjs/toolkit";
import getChats from "./actions/getChats";
import getMessages from "./actions/getMessages";

const chatsSlice = createSlice({
  name: "chats",

  initialState: {
    data: [],
    chat: null,
    chatIdx: null,
    chatsStatus: null,
    messagesStatus: null,
  },

  reducers: {
    setChatIdx: (state, action) => {
      state.chatIdx = state.data.findIndex(chat => chat.id === action.payload.id);
    },

    addMessage: (state, action) => {
      state.data[state.chatIdx].messages.push(action.payload.message);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.chatsStatus = "chats.pending";
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.chatsStatus = "chats.fulfilled";
        state.data = action.payload.chats;
      })
      .addCase(getMessages.pending, (state) => {
        state.messagesStatus = "messages.pending";
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.data[state.chatIdx].messages = [
          ...action.payload.messages,
          ...(state.data[state.chatIdx].messages ?? []),
        ];

        state.messagesStatus = "messages.fulfilled";
      })
  },
});

export const {
  setChatIdx,
  addMessage,
} = chatsSlice.actions;

export default chatsSlice.reducer;
