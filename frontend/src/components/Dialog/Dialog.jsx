import Messages from "./Messages";
import Form from "./Form";
import Header from "./Header";
import DialogCenter from "./DialodCenter";
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import useChat from "hooks/useChat";
import getMessages from "store/chatsSlice/getMessages";
import addMessage from "store/chatsSlice/addMessage";
import {Box, Stack} from "@mui/material";

const Dialog = () => {
  const {chat} = useChat();

  const dispatch = useDispatch();

  const chatId = useSelector(state => state.chats.selectedChat);

  const messagesRef = useRef();

  useEffect(() => {
    if (chat.messages.length === 0) {
      dispatch(getMessages())
        .then(() => scrollToLastMessage(messagesRef.current, {block: "end"}));
    } else {
      scrollToLastMessage(messagesRef.current, {block: "end"});
    }
  }, [chatId]);

  const submitHandler = (value) => {
    dispatch(addMessage(value)).then(() => {
      scrollToLastMessage(messagesRef.current, {
        behavior: "smooth",
        block: "end",
      });
    });
  };

  const scrollToLastMessage = (options) => {
    const messages = messagesRef.current.children;
    const lastChild = messages[messages.length - 1];
    lastChild.scrollIntoView(options);
  };

  return (
    <Stack sx={{height: "100vh"}}>
      {
        chat && <>
          <Header chat={chat}/>

          <Box sx={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
          }}>
            <DialogCenter sx={{height: "100%"}}>
              <Messages
                messagesRef={messagesRef}
                chat={chat}
              />
            </DialogCenter>
          </Box>
        </>
      }

      <DialogCenter sx={{
        display: "flex",
        padding: ".5rem 0",
      }}>
        <Form onSubmit={submitHandler}/>
      </DialogCenter>
    </Stack>
  )
};

export default Dialog;
