import {useDispatch, useSelector} from "react-redux";
import {setSelectedChat} from "store/chatsSlice";
import {useMemo} from "react";

function useChat() {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chats.data);
  const selectedChat = useSelector(state => state.chats.selectedChat);

  const chat = useMemo(() => {
    return chats.find(chat => chat.id === selectedChat);
  }, [selectedChat]);

  const select = (id) => dispatch(setSelectedChat(id));

  return {
    chat,
    select,
  };
}

export default useChat;
