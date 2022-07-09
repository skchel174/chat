import PropTypes from "prop-types";
import MessageBox from "./MessageBox";
import MessageMeta from "./MessageMeta";
import MessageAppendix from "./MessageAppendix";
import ChatAvatar from "components/Common/ChatAvatar";
import {styled, Typography, useTheme} from "@mui/material";
import {useSelector} from "react-redux";

const MessageContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "type",
})(({type}) => ({
  position: "relative",
  margin: ".3rem 0",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: type === "input" ? "flex-start" : "flex-end",
}));

const Message = ({type, author, message, isGroupChat}) => {
  const settings = useSelector(state => state.settings.data);

  const theme = useTheme();

  return (
    <MessageContainer type={type}>
      {
        (isGroupChat && type === "input") &&
        <ChatAvatar
          sx={{marginRight: ".4rem"}}
          img={author.img}
          name={author.name}
        />
      }

      <MessageBox type={type}>
        {
          (isGroupChat && type === "input") &&
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
          <MessageMeta time={message.time}/>
        </Typography>

        <MessageAppendix type={type}/>
      </MessageBox>
    </MessageContainer>
  )
};

Message.propTypes = {
  type: PropTypes.oneOf(["input", "output"]).isRequired,
  author: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  isGroupChat: PropTypes.bool,
};

export default Message;
