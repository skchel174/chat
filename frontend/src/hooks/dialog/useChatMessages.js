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

  const fetchMessages = (id) => dispatch(getMessages({chatId: id}));

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

  const resolveType = (authorId) => authorId === user.id ? "output" : "input";

  const resolveAuthor = (authorId) => chat.users.find(chatUser => chatUser.id === authorId);

  return {
    messagesStatus,
    fetchMessages,
    sendMessage,
    resolveType,
    resolveAuthor,
  };
}
