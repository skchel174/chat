import ChatsHeader from "./ChatsHeader";
import ChatsList from "./ChatsList";
import DrawerContainer from "components/DrawerContainer";
import useChatList from "hooks/dialog/useChatList";
import useInput from "hooks/common/useInput";
import {useEffect, useState} from "react";

const Chats = () => {
  const input = useInput();

  const {chats, fetchChats, filterChats} = useChatList();

  useEffect(() => {
    if (chats.length === 0) {
      fetchChats();
    }
  }, []);

  const [filteredChats, setFilteredChats] = useState(chats);

  useEffect(() => {
    input.value.length > 0
      ? setFilteredChats(filterChats(input.value))
      : setFilteredChats(chats)
  }, [chats, input.value]);

  return (
    <DrawerContainer>
      <ChatsHeader input={input}/>
      <ChatsList chats={filteredChats}/>
    </DrawerContainer>
  )
};

export default Chats;
