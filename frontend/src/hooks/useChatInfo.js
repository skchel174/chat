import {useSelector} from "react-redux";
import formatDate from "helpers/formatDate";

export default function useChatInfo(chat) {
  const user = useSelector(state => state.user.data);

  let avatar = chat.img;
  let title = chat.name;
  let activityDate = null;

  if (chat.type === "individual") {
    const participant = chat.users.find(chatUser => chatUser.id !== user.id);

    avatar = participant.img;
    title = participant.name;
    activityDate = formatDate(participant.visited_at, "visit");
  }

  const members = chat.users.length;
  const currentMessage = chat.messages[chat.messages.length - 1];

  return {
    title,
    avatar,
    members,
    activityDate,
    currentMessage,
  }
}
