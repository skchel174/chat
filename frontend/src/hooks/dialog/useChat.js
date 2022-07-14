import {useDispatch, useSelector} from "react-redux";
import {formatDate, formatVisitTime} from "helpers/formatTime";
import useAuth from "hooks/auth/useAuth";
import {setChatIdx} from "store/chatsSlice";
import getMessages from "store/chatsSlice/actions/getMessages";
import {useEffect, useState} from "react";

function useChat() {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chats.data);
  const chatIdx = useSelector(state => state.chats.chatIdx);
  const requestStatus = useSelector(state => state.chats.requestStatus);

  const {user} = useAuth();

  const selectChat = (id) => dispatch(setChatIdx({id}));

  const fetchMessages = (id) => dispatch(getMessages({chatId: id}));

  const getChatInfo = (chat) => {
    let title = chat.name;
    let avatar = chat.img;
    let members = chat.users.length;

    let message = chat.messages?.length > 0
      ? chat.messages[chat.messages.length - 1]
      : chat?.lastMessage;

    let date = message
      ? formatDate(message.datetime)
      : formatDate(chat.created_at);

    if (chat.type === "private") {
      const companion = chat.users.find(chatUser => chatUser.id !== user.id);

      title = companion.name;
      avatar = companion.img;
      date = formatVisitTime(companion.visited_at);
    }

    return {title, avatar, message, members, date};
  };

  return {
    chatIdx,
    chat: chats[chatIdx],
    messagesStatus: requestStatus,
    fetchMessages,
    selectChat,
    getChatInfo,
  };
}

export default useChat;

export function getChatName(chat) {
  if (chat.type === "group") {
    return chat.name;
  }


}
