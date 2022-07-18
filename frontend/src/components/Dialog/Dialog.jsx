import Messages from "./Messages";
import Form from "./Form";
import Header from "./Header";
import useChat from "hooks/dialog/useChat";
import useChatMessages from "hooks/dialog/useChatMessages";
import {Stack} from "@mui/material";

const Dialog = () => {
  const {chat} = useChat();

  const {sendMessage} = useChatMessages();

  return (
    <Stack sx={{height: "100%"}}>
      {
        chat && <>
          <Header chat={chat}/>
          <Messages chat={chat}/>
          <Form onSubmit={sendMessage}/>
        </>
      }
    </Stack>
  )
};

export default Dialog;
