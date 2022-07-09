import Messages from "./Messages";
import Form from "./Form";
import Header from "./Header";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import useChat from "hooks/useChat";
import getMessages from "store/chatsSlice/getMessages";
import addMessage from "store/chatsSlice/addMessage";
import {Stack} from "@mui/material";

const Dialog = () => {
  const {chat} = useChat();

  const dispatch = useDispatch();

  const chatId = useSelector(state => state.chats.selectedChat);

  const messagesRef = useRef();

  useEffect(() => {
    if (chat?.messages.length === 0) {
      dispatch(getMessages())
        .then(() => scrollToLastMessage());
    } else {
      scrollToLastMessage({block: "end"});
    }
  }, [chatId]);

  const submitHandler = (value) => {
    dispatch(addMessage(value))
      .then(() => scrollToLastMessage(true));
  };

  const scrollToLastMessage = (smooth = false) => {
    if (!messagesRef.current) {
      return;
    }

    const messages = messagesRef.current.children;
    const lastChild = messages[messages.length - 1];

    lastChild.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
      block: "end",
    });
  };

  return (
    <Stack sx={{height: "100%"}}>
      {
        chat && <>
          <Header chat={chat}/>

          <Messages
            chat={chat}
            messagesRef={messagesRef}
          />

          <Form onSubmit={submitHandler}/>
        </>
      }
    </Stack>
  )
};

export default Dialog;
