import {Stack, styled} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import IntersectObserver from "components/Common/IntersectObserver";
import useChatMessages from "hooks/dialog/useChatMessages";
import useChat from "hooks/dialog/useChat";
import MessagesScroll from "./MessagesScroll";
import MessagesGroup from "./MessagesGroup";
import PropTypes from "prop-types";

const Root = styled("div")(() => ({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  overflowY: "auto",
  overflowX: "hidden",

  "&::-webkit-scrollbar-track": {
    backgroundColor: "inherit",
  },
}));

const ListStyle = styled("div")(() => ({
  height: "100%",
  width: "100%",
  padding: "0 5%",
}));

const List = styled(Stack)(() => ({
  minWidth: "20rem",
  maxWidth: "80rem",
  width: "100%",
  height: "100%",
}));

const Messages = ({chat}) => {
  const messagesRef = useRef();

  const [position, setPosition] = useState(null);

  const {chatIdx, currentMessage} = useChat(chat);
  const {fetchMessages} = useChatMessages();

  const scrollToCurrentMessage = (block, smooth = false) => {
    if (messagesRef.current) {
      const messages = messagesRef.current.children;
      const lastChild = messages[messages.length - 1];

      lastChild.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "end",
      });
    }
  };

  const intersectHandler = () => {
    const messageEl = messagesRef.current.querySelector(".messages__item");

    if (messageEl) {
      setPosition(messageEl);
      fetchMessages();
    }
  };

  useEffect(() => {
    if (chat?.messages.length === 0) {
      fetchMessages(chat.id).then(scrollToCurrentMessage);
    }
  }, [chatIdx]);

  useEffect(() => {
    scrollToCurrentMessage("end", true);
  }, [currentMessage]);

  useEffect(() => {
    if (position) {
      position.scrollIntoView({block: "center"});
      setPosition(null);
    }
  }, [chat.messages]);

  const {messagesStatus} = useChatMessages();

  return (
    <Root>
      <ListStyle>
        <List ref={messagesRef}>
          <IntersectObserver
            sx={{marginTop: "auto"}}
            scrollArea={messagesRef.current}
            intersectHandler={intersectHandler}
          />

          <MessagesScroll show={messagesStatus === "messages.pending"}/>

          {
            chat.messages.map(group => <MessagesGroup
              key={group.date}
              group={group}
            />)
          }
        </List>
      </ListStyle>
    </Root>
  );
}

Messages.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default Messages;
