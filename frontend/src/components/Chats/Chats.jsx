import chats from "storage/chats";
import Chat from "components/Chat";
import ChatsHeader from "./ChatsHeader";
import {useState} from "react";
import ChatsMenu from "./ChatsMenu";
import usePopover from "hooks/common/usePopover";
import DrawerContainer from "components/Layout/DrawerContainer";
import ChatsContainer from "./ChatsContainer";
import useInput from "hooks/common/useInput";
import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";
import useBreakpoints from "hooks/common/useBreakpoints";

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const leftColumn = useLeftColumn();

  const {ex} = useBreakpoints();

  const selectChat = (id) => {
    setSelectedChat(id);

    if (ex) {
      leftColumn.close();
    }
  }

  const popover = usePopover({
    anchor: {
      vertical: 'center',
      horizontal: 'center',
    },
    transform: {
      vertical: 'top',
      horizontal: 'left',
    },
  });

  const openContextMenu = (event) => {
    event.preventDefault();
    popover.open(event);
  };

  const input = useInput();

  return (
    <DrawerContainer>
      <ChatsHeader input={input}/>

      <ChatsContainer>
        {
          chats.map(chat =>
            <Chat
              key={chat.id}
              chat={chat}
              selected={selectedChat === chat.id}
              handleLeftClick={selectChat}
              handleRightClick={openContextMenu}
            />
          )
        }
      </ChatsContainer>

      <ChatsMenu
        position={popover.position}
        anchor={popover.anchor}
        handleClose={popover.close}
      />
    </DrawerContainer>
  )
};

export default Chats;
