import {useDispatch, useSelector} from "react-redux";
import {formatDate} from "helpers/formatTime";
import useAuth from "hooks/auth/useAuth";
import {setChatIdx} from "store/chatsSlice";
import {useEffect, useState} from "react";

function useChat(chat = {}) {
  const dispatch = useDispatch();

  const {user} = useAuth();

  const chats = useSelector(state => state.chats.data);
  const chatIdx = useSelector(state => state.chats.chatIdx);

  let title = chat.name;
  let avatar = chat.img;
  let companion = null;

  const [currentMessage, setCurrentMessage] = useState(null);
  const [activityDate, setActivityDate] = useState(null);

  if (chat.type === "private") {
    companion = chat.users.find(item => item.id !== user.id);
    title = companion.name;
    avatar = companion.img;
  }

  useEffect(() => {
    const group = chat.messages?.length > 0 && chat.messages[chat.messages.length - 1];

    const message = group.messages?.length > 0
      ? group.messages[group.messages.length - 1]
      : chat?.lastMessage;

    setCurrentMessage(message);
  }, [chat?.messages]);

  useEffect(() => {
    let date = currentMessage ? currentMessage.datetime : chat.created_at;
    setActivityDate(formatDate(date))
  }, [currentMessage]);

  const selectChat = (id) => dispatch(setChatIdx({id}));

  return {
    chatIdx,
    chat: chats[chatIdx],
    title,
    avatar,
    companion,
    currentMessage,
    activityDate,
    selectChat,
  };
}

export default useChat;
