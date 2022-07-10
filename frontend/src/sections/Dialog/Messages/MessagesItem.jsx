import MessagesDate from "./MessagesDate";
import Message from "../Message";
import PropTypes from "prop-types";

const MessagesItem = ({chatType, messageType, messageAuthor, message, prevMessage = null}) => {
  return (
    <>
      {
        (!prevMessage || prevMessage.datetime !== message.datetime)
        && <MessagesDate date={message.datetime}/>
      }

      <Message
        type={messageType}
        author={messageAuthor}
        message={message}
        isGroupChat={chatType === "group"}
      />
    </>
  )
};

MessagesItem.propTypes = {
  chatType: PropTypes.oneOf(["group", "private"]).isRequired,
  messageType: PropTypes.oneOf(["output", "input"]).isRequired,
  messageAuthor: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  prevMessage: PropTypes.object,
};

export default MessagesItem;
