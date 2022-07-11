import {useDispatch, useSelector} from "react-redux";
import {addMessage, setSelectedChat} from "store/chatsSlice";
import {formatDate, formatVisitTime} from "helpers/formatTime";
import useAuth from "hooks/auth/useAuth";
import moment from "moment";

function useChat() {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chats.data);
  const selectedChat = useSelector(state => state.chats.selectedChat);

  const {user} = useAuth();

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

  const sendMessage = async (text) => {
    const message = {
      id: (new Date).getTime(),
      chatId: selectedChat,
      authorId: user.id,
      datetime: moment().format("YYYY-MM-DD\Thh:mm"),
      text,
    };

    return dispatch(addMessage({message}));
  };

  return {
    chat,
    selectChat,
    getChatInfo,
    sendMessage,
  };
}

export default useChat;
