import {useSelector} from "react-redux";
import useChat from "./useChat";
import formatDate from "helpers/formatDate";

export default function useMessageInfo(message) {
  const user = useSelector(state => state.user.data);

  const type = message.authorId === user.id ? "output" : "input";

  const {chat} = useChat();

  const time = formatDate(message.created_at, "time");

  const author = chat.users.find(chatUser => chatUser.id === message.authorId);

  return {
    type,
    time,
    author,
    chatType: chat.type,
  }
}
