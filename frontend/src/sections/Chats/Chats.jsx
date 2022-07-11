import ChatsHeader from "./ChatsHeader";
import ChatsList from "./ChatsList";
import DrawerContainer from "components/DrawerContainer";
import useInput from "hooks/common/useInput";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import getChats from "store/chatsSlice/actions/getChats";

const Chats = () => {
  const dispatch = useDispatch();

  const input = useInput();

  const chats = useSelector(state => state.chats.data);

  useEffect(() => {
    if (chats.length === 0) {
      dispatch(getChats());
    }
  }, []);

  return (
    <DrawerContainer>
      <ChatsHeader input={input}/>
      <ChatsList chats={chats}/>
    </DrawerContainer>
  )
};

export default Chats;
