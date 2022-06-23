import ChatsHeader from "./ChatsHeader";
import ChatsMenu from "./ChatsMenu";
import ChatsItem from "./ChatsItem";
import usePopover from "hooks/common/usePopover";
import DrawerContainer from "components/Layout/DrawerContainer";
import useInput from "hooks/common/useInput";
import ProgressBar from "components/Common/PregressBar";
import useBreakpoints from "hooks/common/useBreakpoints";
import {useEffect} from "react";
import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";
import {useDispatch, useSelector} from "react-redux";
import {setSelectedChat} from "store/chatsSlice";
import {useCenter} from "infrastructure/Context/CenterContext";
import getChats from "store/chatsSlice/getChats";
import {Box, Fade, styled} from "@mui/material";

const ChatsList = styled("div")(
  () => ({
    height: "100%",
    padding: ".5rem",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  })
);

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

  const chatsRequestStatus = useSelector(state => state.chats.chatsRequestStatus);

  return (
    <DrawerContainer>
      <ChatsHeader input={input}/>

      <Fade in={chatsRequestStatus === "pending"}>
        <Box>
          <ProgressBar/>
        </Box>
      </Fade>

      <ChatsList>
        {
          chats.map(chat =>
            <ChatsItem
              key={chat.id}
              chat={chat}
              selected={selectedChat === chat.id}
              handleLeftClick={select}
              handleRightClick={openContextMenu}
            />
          )
        }
      </ChatsList>

      <ChatsMenu
        position={popover.position}
        anchor={popover.anchor}
        handleClose={popover.close}
      />
    </DrawerContainer>
  )
};

export default Chats;
