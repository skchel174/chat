import {useDispatch, useSelector} from "react-redux";
import {setSelectedChat} from "store/chatsSlice";
import {formatDate, formatVisitTime} from "helpers/formatTime";

function useChat() {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chats.data);
  const selectedChat = useSelector(state => state.chats.selectedChat);
  const user = useSelector(state => state.user.data);

  const chat = chats.find(chat => chat.id === selectedChat);

  const selectChat = (id) => dispatch(setSelectedChat({id}));

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

    return {
      title,
      avatar,
      message,
      members,
      date,
    }
  };

  return {
    chat,
    selectChat,
    getChatInfo,
  };
}

export default useChat;
