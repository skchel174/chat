import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import useAuth from "hooks/auth/useAuth";
import useChat from "hooks/dialog/useChat";
import useSocket from "hooks/common/useSocket";
import getMessages from "store/chatsSlice/actions/getMessages";
import {addMessage} from "store/chatsSlice";

export default function useChatMessages() {
  const dispatch = useDispatch();
  const {socket} = useSocket()

  const {chat} = useChat();
  const {user} = useAuth();

  const messagesStatus = useSelector(state => state.chats.messagesStatus);

  const fetchMessages = () => dispatch(getMessages());

  const fetchMessage = (message) => dispatch(addMessage({message}));

  const sendMessage = async (text) => {
    const message = {
      id: (new Date).getTime(),
      chatId: chat.id,
      authorId: user.id,
      datetime: moment().format("YYYY-MM-DD\Thh:mm"),
      text,
    };

    socket.emit("client:message", {message});
  };

  const resolveType = (message) => message.authorId === user.id ? "output" : "input";

  const resolveAuthor = (message) => chat.users.find(chatUser => chatUser.id === message.authorId);

  return {
    messagesStatus,
    fetchMessages,
    fetchMessage,
    sendMessage,
    resolveType,
    resolveAuthor,
  };
}
