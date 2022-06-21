import Messages from "./Messages";
import Form from "./Form";
import Header from "./Header";
import {Box, Stack} from "@mui/material";
import useChat from "hooks/useChat";
import DialogCenter from "./DialodCenter";

const Dialog = () => {
  const {chat} = useChat();

  return (
    <Stack sx={{
      height: "100vh",
    }}>
      {
        chat && <>
          <Header chat={chat}/>

          <Box sx={{
            width: "100%",
            height: "100%",
            overflowY: "auto",
          }}>
            <DialogCenter sx={{height: "100%"}}>
              <Messages messages={chat.messages}/>
            </DialogCenter>
          </Box>
        </>
      }

      <DialogCenter sx={{
        padding: ".5rem 0",
        display: "flex",
      }}>
        <Form/>
      </DialogCenter>
    </Stack>
  )
};

export default Dialog;
