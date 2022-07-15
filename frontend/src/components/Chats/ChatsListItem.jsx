import {styled, Typography} from "@mui/material";
import Chat from "components/Common/Chat";
import useChat from "hooks/dialog/useChat";
import ItemButton from "components/Common/ItemButton";
import PropTypes from "prop-types";

const Date = styled(Typography)(
  ({theme}) => ({
    position: "absolute",
    top: ".8rem",
    right: ".6rem",
    fontSize: ".7rem",
    color: theme.palette.text.secondary,
  })
);

const ChatsListItem = ({chat, selected, onLeftClick, onRightClick}) => {
  const handleLeftClick = () => onLeftClick(chat.id);

  const {title, avatar, activityDate, currentMessage} = useChat(chat);

  return (
    <ItemButton
      active={selected}
      onClick={handleLeftClick}
      onContextMenu={onRightClick}
    >
      <Chat
        title={title}
        subtitle={currentMessage?.text}
        avatar={avatar}
      />

      <Date>{activityDate}</Date>
    </ItemButton>
  );
};

ChatsListItem.propTypes = {
  chat: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
};

export default ChatsListItem;
