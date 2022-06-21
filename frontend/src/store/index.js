import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import chatsReducer from "./chatsSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    chats: chatsReducer,
  },
});
