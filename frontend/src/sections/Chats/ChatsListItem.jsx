import {styled, Typography} from "@mui/material";
import Chat from "components/Chat";
import useChat from "hooks/useChat";
import ItemButton from "components/ItemButton";
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
  const {getChatInfo} = useChat(chat);

  const {title, avatar, date, message} = getChatInfo(chat);

  const handleLeftClick = () => onLeftClick(chat.id);

  return (
    <ItemButton
      active={selected}
      onClick={handleLeftClick}
      onContextMenu={onRightClick}
    >
      <Chat
        title={title}
        subtitle={message?.text}
        avatar={avatar}
      />

      <Date>{date}</Date>
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
