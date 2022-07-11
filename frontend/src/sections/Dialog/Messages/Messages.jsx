import {Box, Stack, styled} from "@mui/material";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import IntersectObserver from "components/IntersectObserver";
import {useDispatch, useSelector} from "react-redux";
import getMessages from "store/chatsSlice/actions/getMessages";
import MessagesScroll from "./MessagesScroll";
import MessagesItem from "./MessagesItem";

const MessagesContainer = styled("div")(
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

const MessagesList = styled(Stack)(
  () => ({
    minWidth: "20rem",
    maxWidth: "80rem",
    width: "100%",
    height: "100%",
  })
);

const Messages = ({messagesRef, chat}) => {

  const messagesStatus = useSelector(state => state.chats.requestStatus);

  const [position, setPosition] = useState(null);

  const dispatch = useDispatch();

  const intersectHandler = () => {
    const messagesEl = messagesRef.current;

    if (messagesEl.children.length > 2) {
      setPosition(messagesEl.children[2]);
      dispatch(getMessages());
    }
  };

  useEffect(() => {
    if (position) {
      position.scrollIntoView({block: "center"});
      setPosition(null);
    }
  }, [chat.messages]);

  const user = useSelector(state => state.user.data);

  const resolveType = (authorId) => authorId === user.id ? "output" : "input";

  const resolveAuthor = (authorId) => chat.users.find(chatUser => chatUser.id === authorId);

  return (
    <MessagesContainer>
      <Box sx={{
        height: "100%",
        padding: "0 5%",
      }}>
        <MessagesList ref={messagesRef}>
          <Box sx={{marginTop: "auto"}}>
            <IntersectObserver
              scrollArea={messagesRef.current}
              intersectHandler={intersectHandler}
            />
          </Box>

          <MessagesScroll show={messagesStatus === "messages.pending"}/>

          {
            chat.messages.map((message, key) => <MessagesItem
                key={message.id}
                message={message}
                chatType={chat.type}
                messageType={resolveType(message.authorId)}
                messageAuthor={resolveAuthor(message.authorId)}
                prevMessage={chat.messages[key - 1]}
              />
            )
          }
        </MessagesList>
      </Box>
    </MessagesContainer>
  );
}

Messages.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default Messages;
