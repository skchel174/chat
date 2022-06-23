import {useSelector} from "react-redux";
import formatDate from "helpers/formatDate";

export default function useChatInfo(chat) {
  const user = useSelector(state => state.user.data);

  let avatar;
  let title;
  let activityDate;
  let members = chat.users.length;

  const currentMessage = (chat.messages && chat.messages.length > 0)
    ? chat.messages[chat.messages.length - 1]
    : null;

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

  return {
    title,
    avatar,
    members,
    activityDate,
    currentMessage,
  };
}
