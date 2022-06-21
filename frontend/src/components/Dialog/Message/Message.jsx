import PropTypes from "prop-types";
import MessageBox from "./MessageBox";
import MessageMeta from "./MessageMeta";
import MessageAppendix from "./MessageAppendix";
import ChatAvatar from "components/Common/ChatAvatar";
import {styled, Typography} from "@mui/material";
import useMessageInfo from "hooks/useMessageInfo";

const MessageContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "type",
})(({type}) => ({
  position: "relative",
  margin: "15px 0",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: type === "input" ? "flex-start" : "flex-end",
}));

const Message = ({message}) => {
  const {type, time, author, chatType} = useMessageInfo(message);

  return (
    <MessageContainer type={type}>
      {
        (chatType === "group" && type === "input") &&
        <ChatAvatar
          sx={{marginRight: ".4rem"}}
          img={author.img}
          name={author.name}
        />
      }

      <MessageBox type={type}>
        {
          (chatType === "group" && type === "input") &&
          <Typography
            fontSize=".8rem"
            fontWeight="600"
            sx={{marginBottom: ".4rem"}}
          >
            {author.name}
          </Typography>
        }

        <Typography
          lineHeight="1.3"
          fontSize=".9rem"
        >
          {message.text}
          <MessageMeta time={time}/>
        </Typography>

        <MessageAppendix type={type}/>
      </MessageBox>
    </MessageContainer>
  )
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
