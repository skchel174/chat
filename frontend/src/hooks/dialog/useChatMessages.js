import moment from "moment";
import {addMessage} from "store/chatsSlice";
import {useDispatch, useSelector} from "react-redux";
import useAuth from "hooks/auth/useAuth";
import useChat from "hooks/dialog/useChat";
import getMessages from "store/chatsSlice/actions/getMessages";

export default function useChatMessages() {
  const dispatch = useDispatch();

  const {chat} = useChat();
  const {user} = useAuth();

  const messagesStatus = useSelector(state => state.chats.messagesStatus);

  const fetchMessages = () => dispatch(getMessages());

  const sendMessage = async (text) => {
    const message = {
      id: (new Date).getTime(),
      chatId: chat.id,
      authorId: user.id,
      datetime: moment().format("YYYY-MM-DD\Thh:mm"),
      text,
    };

    return dispatch(addMessage({message}));
  };

  const resolveType = (message) => message.authorId === user.id ? "output" : "input";

  const resolveAuthor = (message) => chat.users.find(chatUser => chatUser.id === message.authorId);

  return {
    messagesStatus,
    fetchMessages,
    sendMessage,
    resolveType,
    resolveAuthor,
  };
}
