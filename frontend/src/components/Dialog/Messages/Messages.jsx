import {Box, Stack} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import PropTypes from "prop-types";
import Message from "../Message";
import MessagesDate from "./MessagesDate";
import IntersectObserver from "components/Common/IntersectObserver";
import {useDispatch, useSelector} from "react-redux";
import getMessages from "store/chatsSlice/getMessages";
import MessagesScroll from "./MessagesScroll";

const Messages = ({messages}) => {
  const messagesRef = useRef();

  useEffect(() => {
    scrollToCurrentMessage(messagesRef.current, {block: "end"})
  }, []);

  const [viewPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    if (viewPosition) {
      viewPosition.scrollIntoView();
      setCurrentPosition(null);
    } else {
      scrollToCurrentMessage(messagesRef.current, {
        behavior: "smooth",
        block: "end",
      })
    }
  }, [messages]);

  const dispatch = useDispatch();

  const loadMessages = () => {
    setCurrentPosition(messagesRef.current.children[2])
    dispatch(getMessages());
  };

  const messagesStatus = useSelector(state => state.chats.messagesStatus);

  return (
    <Stack
      ref={messagesRef}
      justifyContent="flex-end"
      sx={{minHeight: "100%"}}
    >
      <IntersectObserver
        scrollArea={messagesRef.current}
        intersectHandler={loadMessages}
      />

      <MessagesScroll show={messagesStatus === "pending"}/>

      {
        messages.map((message, key) =>
          <Box key={message.id}>
            {
              (messages[key - 1] && messages[key - 1].date !== message.date)
              && <MessagesDate date={message.date}/>
            }
            <Message message={message}/>
          </Box>
        )
      }
    </Stack>
  );
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Messages;

function scrollToCurrentMessage(messagesEl, options) {
  if (messagesEl) {
    const messages = messagesEl.children;
    const lastChild = messages[messages.length - 1];
    lastChild.scrollIntoView(options);
  }
}
