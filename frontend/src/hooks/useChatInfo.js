import {useSelector} from "react-redux";
import formatDate from "helpers/formatDate";

export default function useChatInfo(chat) {
  const user = useSelector(state => state.user.data);

  let avatar;
  let title;
  let activityDate;
  let currentMessage;

  if (chat.messages && chat.messages.length > 0) {
    currentMessage = chat.messages[chat.messages.length - 1];
  } else if (chat.lastMessage) {
    currentMessage = chat.lastMessage;
  } else {
    currentMessage = null;
  }

  if (chat.type === "private") {
    const participant = chat.users.find(chatUser => chatUser.id !== user.id);

    avatar = participant.img;
    title = participant.name;
    activityDate = formatDate(participant.visited_at, "visit");
  } else {
    avatar = chat.img;
    title = chat.name;
    activityDate = currentMessage
      ? formatDate(currentMessage.date, "date")
      : formatDate(chat.created_at, "date");
  }

  let members = chat.users.length;

  return {
    title,
    avatar,
    members,
    activityDate,
    currentMessage,
  };
}
