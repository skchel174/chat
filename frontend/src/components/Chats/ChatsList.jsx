import {Fade, LinearProgress, Stack} from "@mui/material";
import ChatsListItem from "./ChatsListItem";
import ChatsMenu from "./ChatsMenu";
import usePopover from "hooks/common/usePopover";
import useChat from "hooks/dialog/useChat";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import useBreakpoints from "hooks/common/useBreakpoints";
import useChatList from "hooks/dialog/useChatList";
import PropTypes from "prop-types";

const ChatsList = ({chats}) => {
  const {ex} = useBreakpoints();
  const {leftColumn} = useMainPageLayout();
  const {chat, selectChat} = useChat();

  const handleSelectChat = (id) => {
    selectChat(id);

    if (ex) {
      leftColumn.close();
    }
  };

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

  const {chatsStatus} = useChatList();

  return (
    <>
      <Fade in={chatsStatus === "chats.pending"}>
        <LinearProgress/>
      </Fade>

      <Stack sx={{height: "100%", padding: ".5rem"}}>
        {chats.map(item => <ChatsListItem
            key={item.id}
            chat={item}
            selected={chat?.id === item.id}
            onLeftClick={handleSelectChat}
            onRightClick={openContextMenu}
          />
        )}
      </Stack>

      <ChatsMenu
        position={popover.position}
        anchor={popover.anchor}
        handleClose={popover.close}
      />
    </>
  );
};

ChatsList.propTypes = {
  chats: PropTypes.array.isRequired,
};

export default ChatsList;
