import PropTypes from "prop-types";
import {Avatar, ListItemButton, Stack, styled} from "@mui/material";
import useChatInfo from "hooks/useChatInfo";
import ChatTitle from "components/Common/ChatTitle";
import ChatSubtitle from "components/Common/ChatSubtitle";
import requireImage from "helpers/requireImage";
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

  "& .chat__title, .chat__subtitle, .folder__date": {
    color: (active && theme.palette.text.neutral),
  }
}));

const ChatDate = styled("div")(
  ({theme}) => ({
    position: "absolute",
    top: ".7rem",
    right: ".5rem",
    fontSize: ".7rem",
    color: theme.palette.text.secondary,
  })
);

const ChatAvatar = styled(Avatar)(
  () => ({
    width: "4rem",
    height: "4rem",
    marginRight: ".5rem",
  })
);

const ChatsItem = ({chat, selected, handleLeftClick, handleRightClick}) => {
  const {title, avatar, currentMessage} = useChatInfo(chat);

  return (
    <ChatContainer
      active={selected}
      onClick={() => handleLeftClick(chat.id)}
      onContextMenu={handleRightClick}
    >
      <ChatAvatar src={avatar && requireImage(avatar)}>{title[0]}</ChatAvatar>

      <Stack sx={{overflow: "hidden"}}>
        <ChatTitle>{title}</ChatTitle>
        <ChatSubtitle>{currentMessage.text}</ChatSubtitle>
      </Stack>

      <ChatDate>{formatDate(currentMessage.created_at, "date")}</ChatDate>
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
