import {useDispatch, useSelector} from "react-redux";
import {setSelectedChat} from "store/chatsSlice";

function useChat() {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chats.data);
  const chatId = useSelector(state => state.chats.selectedChat);

  const chat = chats.find(chat => chat.id === chatId);

  const select = (id) => dispatch(setSelectedChat(id));

  return {
    chat,
    select,
  };
}

export default useChat;
