import MessagesDate from "./MessagesDate";
import Message from "../Message";
import PropTypes from "prop-types";
import {Box} from "@mui/material";

const MessagesItem = ({chatType, messageType, author, message, prevMessage = null}) => {
  return (
    <>
      {
        (!prevMessage || prevMessage.datetime !== message.datetime)
        && <MessagesDate date={message.datetime}/>
      }

      <Box className="messages__item">
        <Message
          type={messageType}
          author={author}
          message={message}
          extended={chatType === "group"}
        />
      </Box>
    </>
  )
};

MessagesItem.propTypes = {
  chatType: PropTypes.oneOf(["group", "private"]).isRequired,
  messageType: PropTypes.oneOf(["output", "input"]).isRequired,
  author: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  prevMessage: PropTypes.object,
};

export default MessagesItem;
