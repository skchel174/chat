import MessageBox from "./MessageBox";
import MessageMeta from "./MessageMeta";
import MessageAppendix from "./MessageAppendix";
import ChatAvatar from "components/ChatAvatar";
import useChat from "hooks/dialog/useChat";
import useChatMessages from "hooks/dialog/useChatMessages";
import {useSelector} from "react-redux";
import {styled, Typography, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const Root = styled("div", {
  shouldForwardProp: (prop) => prop !== "type",
})(({type}) => ({
  position: "relative",
  margin: ".3rem 0",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: type === "input" ? "flex-start" : "flex-end",
}));

const Message = ({message}) => {
  const settings = useSelector(state => state.settings.data);

  const {chat} = useChat();

  const {resolveType, resolveAuthor} = useChatMessages();

  const type = resolveType(message);
  const author = resolveAuthor(message);

  const theme = useTheme();

  return (
    <Root type={type}>
      {
        (chat.type === "group" && type === "input") &&
        <ChatAvatar
          sx={{marginRight: ".4rem"}}
          img={author.img}
          name={author.name}
        />
      }

      <MessageBox type={type}>
        {
          (chat.type === "group" && type === "input") &&
          <Typography
            fontSize={`${settings.fontSize}px`}
            fontWeight="600"
            sx={{marginBottom: ".4rem"}}
            color={theme.palette.text.primary}
          >
            {author.name}
          </Typography>
        }

        <Typography
          className="message"
          lineHeight="1.3"
          whiteSpace="pre-line"
          fontSize={`${settings.fontSize}px`}
          color={theme.palette.text.primary}
        >
          {message.text}
          <MessageMeta time={message.datetime}/>
        </Typography>

        <MessageAppendix type={type}/>
      </MessageBox>
    </Root>
  )
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
