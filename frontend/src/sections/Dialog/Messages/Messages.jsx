import {Box, Stack, styled} from "@mui/material";
import {useEffect, useState} from "react";
import IntersectObserver from "components/IntersectObserver";
import {useDispatch} from "react-redux";
import useChatMessages from "hooks/dialog/useChatMessages";
import MessagesScroll from "./MessagesScroll";
import MessagesItem from "./MessagesItem";
import getMessages from "store/chatsSlice/actions/getMessages";
import PropTypes from "prop-types";

const Root = styled("div")(
  () => ({
    height: "100%",
    display: "flex",
    justifyContent: "center",
    overflowY: "auto",
    overflowX: "hidden",

    "&::-webkit-scrollbar-track": {
      backgroundColor: "inherit",
    },
  })
);

const List = styled(Stack)(
  () => ({
    minWidth: "20rem",
    maxWidth: "80rem",
    width: "100%",
    height: "100%",
  })
);

const Messages = ({chat, messagesRef}) => {
  const dispatch = useDispatch();

  const [position, setPosition] = useState(null);

  const intersectHandler = () => {
    const messageEl = messagesRef.current.querySelector(".messages__item");

    if (messageEl) {
      setPosition(messageEl);
      dispatch(getMessages({chatId: chat.id}));
    }
  };

  useEffect(() => {
    if (position) {
      position.scrollIntoView({block: "center"});
      setPosition(null);
    }
  }, [chat.messages]);

  const {messagesStatus, resolveType, resolveAuthor} = useChatMessages();

  return (
    <Root>
      <Box sx={{height: "100%", width: "100%", padding: "0 5%"}}>
        <List ref={messagesRef}>
          <IntersectObserver
            sx={{marginTop: "auto"}}
            scrollArea={messagesRef.current}
            intersectHandler={intersectHandler}
          />

          <MessagesScroll show={messagesStatus === "messages.pending"}/>

          {chat.messages.map((message, key) => <MessagesItem
            key={message.id}
            message={message}
            chatType={chat.type}
            messageType={resolveType(message.authorId)}
            author={resolveAuthor(message.authorId)}
            prevMessage={chat.messages[key - 1]}
          />)}
        </List>
      </Box>
    </Root>
  );
}

Messages.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default Messages;
