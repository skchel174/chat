import {useDispatch, useSelector} from "react-redux";
import getChats from "store/chatsSlice/actions/getChats";
import useAuth from "hooks/auth/useAuth";

export default function useChatList() {
  const dispatch = useDispatch();

  const chats = useSelector(state => state.chats.data);
  const chatsStatus = useSelector(state => state.chats.chatsStatus);

  const fetchChats = () => dispatch(getChats());

  const {user} = useAuth();

  const filterChats = (value) => chats.filter(chat => {
    let title = chat.type === "private"
      ? chat.users.find(item => item.id !== user.id).name
      : chat.name;

    return title.toLowerCase().search(value.toLowerCase()) !== -1;
  });

  return {
    chats,
    chatsStatus,
    fetchChats,
    filterChats,
  };
}
