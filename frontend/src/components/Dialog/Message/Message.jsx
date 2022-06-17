import PropTypes from "prop-types";
import MessageContainer from "./MessageContainer";
import MessageAvatar from "./MessageAvatar";
import MessageBox from "./MessageBox";
import MessageAuthor from "./MessageAuthor";
import MessageText from "./MessageText";
import MessageMeta from "./MessageMeta";
import MessageAppendix from "./MessageAppendix";
import user from "storage/user";
import chat from "storage/chat";

export const TYPE = {
  INPUT: 'input',
  OUTPUT: 'output',
};

const Message = ({message}) => {
  // todo: add to hook
  const messageType = message.author.id === user.id ? TYPE.OUTPUT : TYPE.INPUT;
  const chatType = chat.type === "group" ? "group" : "individual";

  return (
    <MessageContainer type={messageType}>
      {
        (chatType === "group" && messageType === TYPE.INPUT) &&
        <MessageAvatar
          img={message.author.img}
          alt={message.author.name}
        />
      }

      <MessageBox type={messageType}>
        {
          chatType === "group" && <MessageAuthor author={message.author.name}/>
        }

        <MessageText>
          {message.text}
          <MessageMeta time={message.time}/>
        </MessageText>

        <MessageAppendix type={messageType}/>
      </MessageBox>
    </MessageContainer>
  )
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
