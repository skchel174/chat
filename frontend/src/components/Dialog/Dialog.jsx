import Messages from "./Messages";
import Form from "./Form";
import Header from "./Header";
import {useEffect, useRef} from "react";
import useChat from "hooks/dialog/useChat";
import useChatMessages from "hooks/dialog/useChatMessages";
import {Stack} from "@mui/material";

const Dialog = () => {
  const {chat, chatIdx} = useChat();
  const {fetchMessages} = useChatMessages();

  useEffect(() => {
    if (chat?.messages.length === 0) {
      fetchMessages(chat.id).then(scrollToLastMessage);
      return;
    }

    scrollToLastMessage();
  }, [chatIdx]);

  const {sendMessage} = useChatMessages();

  const submitHandler = (value) => {
    sendMessage(value).then(() => scrollToLastMessage(true));
  };

  const messagesRef = useRef();

  const scrollToLastMessage = (smooth = false) => {
    if (messagesRef.current) {
      const messages = messagesRef.current.children;
      const lastChild = messages[messages.length - 1];

      lastChild.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "end",
      });
    }
  };

  return (
    <Stack sx={{height: "100%"}}>
      {
        chat && <>
          <Header chat={chat}/>
          <Messages chat={chat} messagesRef={messagesRef}/>
          <Form onSubmit={submitHandler}/>
        </>
      }
    </Stack>
  )
};

export default Dialog;
