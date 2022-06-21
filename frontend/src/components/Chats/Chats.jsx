import Chat from "components/Chat";
import ChatsHeader from "./ChatsHeader";
import {useEffect} from "react";
import ChatsMenu from "./ChatsMenu";
import usePopover from "hooks/common/usePopover";
import DrawerContainer from "components/Layout/DrawerContainer";
import ChatsContainer from "./ChatsContainer";
import useInput from "hooks/common/useInput";
import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";
import useBreakpoints from "hooks/common/useBreakpoints";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedChat} from "store/chatsSlice";
import getChats from "store/chatsSlice/getChats";
import {useCenter} from "infrastructure/Context/CenterContext";

const Chats = () => {
  const dispatch = useDispatch();

  const selectedChat = useSelector(state => state.chats.selectedChat);

  const center = useCenter();
  const leftColumn = useLeftColumn();
  const {ex} = useBreakpoints();

  const select = (id) => {
    dispatch(setSelectedChat({id}));
    center.setComponent("Dialog");

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

  const chats = useSelector(state => state.chats.data);

  useEffect(() => {
    if (chats.length === 0) {
      dispatch(getChats());
    }
  }, []);

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
              handleLeftClick={select}
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
