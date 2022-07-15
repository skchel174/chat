import Message from "../Message";
import {Box} from "@mui/material";
import useChatMessages from "hooks/dialog/useChatMessages";
import useChat from "hooks/dialog/useChat";
import PropTypes from "prop-types";

const MessagesItem = ({message}) => {
  const {chat} = useChat();

  const {resolveType, resolveAuthor} = useChatMessages();

  const type = resolveType(message);
  const author = resolveAuthor(message);

  return (
    <Box className="messages__item">
      <Message
        message={message}
        type={type}
        author={author}
        extended={chat.type === "group"}
      />
    </Box>
  )
};

MessagesItem.propTypes = {
  message: PropTypes.object.isRequired,
};

export default MessagesItem;
