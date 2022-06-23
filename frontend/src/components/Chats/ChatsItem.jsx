import PropTypes from "prop-types";
import {ListItemButton, Stack, styled} from "@mui/material";
import useChatInfo from "hooks/useChatInfo";
import ChatTitle from "components/Common/ChatTitle";
import ChatSubtitle from "components/Common/ChatSubtitle";
import ChatAvatar from "components/Common/ChatAvatar";
import formatDate from "helpers/formatDate";

const ChatContainer = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})(({theme, active}) => ({
  position: "relative",
  width: "100%",
  height: "4.7rem",
  padding: ".55rem",
  borderRadius: ".75rem",
  display: "flex",
  alignItems: "center",
  flexGrow: 0,
  backgroundColor: active ? theme.palette.active.primary : "inherit",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: (active ? theme.palette.active.primary : theme.palette.background.secondary) + "!important",
  },

  "& .chat-title, .chat-subtitle, .chat-date": {
    color: (active && theme.palette.text.neutral),
  }
}));

const ChatDate = styled("div")(
  ({theme}) => ({
    position: "absolute",
    top: ".8rem",
    right: ".6rem",
    fontSize: ".7rem",
    color: theme.palette.text.secondary,
  })
);

const ChatsItem = ({chat, selected, handleLeftClick, handleRightClick}) => {
  const {title, avatar, activityDate, currentMessage} = useChatInfo(chat);

  return (
    <ChatContainer
      active={selected}
      onClick={() => handleLeftClick(chat.id)}
      onContextMenu={handleRightClick}
    >
      <ChatAvatar
        sx={{
          width: "3.5rem",
          height: "3.5rem",
          marginRight: ".5rem",
        }}
        img={avatar}
        name={title[0]}
      />

      <Stack sx={{overflow: "hidden"}}>
        <ChatTitle>{title}</ChatTitle>
        {
          currentMessage && <ChatSubtitle>{currentMessage.text}</ChatSubtitle>
        }
      </Stack>

      <ChatDate className="chat-date">{activityDate}</ChatDate>
    </ChatContainer>
  );
};

ChatsItem.propTypes = {
  chat: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  handleLeftClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default ChatsItem;
