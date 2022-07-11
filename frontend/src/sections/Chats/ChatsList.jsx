import {Fade, LinearProgress, Stack} from "@mui/material";
import ChatsListItem from "./ChatsListItem";
import {useSelector} from "react-redux";
import ChatsMenu from "./ChatsMenu";
import usePopover from "hooks/common/usePopover";
import PropTypes from "prop-types";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import useBreakpoints from "hooks/common/useBreakpoints";
import useChat from "hooks/useChat";

const ChatsList = ({chats}) => {
  const {selectChat} = useChat();

  const {ex} = useBreakpoints();
  const {leftColumn} = useMainPageLayout();

  const handleSelectChat = (id) => {
    selectChat(id);

    if (ex) {
      leftColumn.close();
    }
  };

  const selectedChat = useSelector(state => state.chats.selectedChat);
  const chatsRequestStatus = useSelector(state => state.chats.requestStatus);

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

  return (
    <>
      <Fade in={chatsRequestStatus === "chats.pending"}>
        <LinearProgress/>
      </Fade>

      <Stack sx={{
        height: "100%",
        padding: ".5rem",
      }}>
        {chats.map(chat => <ChatsListItem
            key={chat.id}
            chat={chat}
            selected={selectedChat === chat.id}
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
