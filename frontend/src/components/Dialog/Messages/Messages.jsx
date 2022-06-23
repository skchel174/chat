import {Stack} from "@mui/material";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import IntersectObserver from "components/Common/IntersectObserver";
import {useDispatch, useSelector} from "react-redux";
import getMessages from "store/chatsSlice/getMessages";
import MessagesScroll from "./MessagesScroll";
import MessagesItem from "./MessagesItem";

const Messages = ({messagesRef, chat}) => {

  const messagesStatus = useSelector(state => state.chats.messagesRequestStatus);

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
    <Stack
      ref={messagesRef}
      justifyContent="flex-end"
      sx={{minHeight: "100%"}}
    >
      <IntersectObserver
        scrollArea={messagesRef.current}
        intersectHandler={intersectHandler}
      />

      <MessagesScroll show={messagesStatus === "pending"}/>

      {
        chat.messages.map((message, key) =>
          <MessagesItem
            key={message.id}
            chatType={chat.type}
            messageType={resolveType(message.authorId)}
            messageAuthor={resolveAuthor(message.authorId)}
            message={message}
            prevMessage={chat.messages[key - 1]}
          />
        )
      }
    </Stack>
  );
}

Messages.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default Messages;
