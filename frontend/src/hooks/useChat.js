import {useDispatch, useSelector} from "react-redux";
import {setSelectedChat} from "store/chatsSlice";

function useChat() {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chats.data);
  const selectedChat = useSelector(state => state.chats.selectedChat);

  const chat = chats.find(chat => chat.id === selectedChat);

  const select = (id) => dispatch(setSelectedChat(id));

  return {
    chat,
    select,
  };
}

export default useChat;
