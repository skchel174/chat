import Messages from "./Messages";
import Form from "./Form";
import DialogCenter from "./DialogCenter";
import DialogContent from "./DialogContent";
import useBreakpoints from "hooks/common/useBreakpoints";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import {useEffect, useState} from "react";
import DialogMessages from "./DialogMessages";
import Header from "./Header";
import messages from "storage/messages";
import chat from "storage/chat";


const Dialog = () => {
  const {md} = useBreakpoints();
  const {isOpen} = useRightColumn();

  const [contentWidth, setContentWidth] = useState({
    width: "70%",
    minWidth: "400px",
    maxWidth: "1200px",
  });

  useEffect(() => {
    setContentWidth(prev => ({
      ...prev,
      width: (md || isOpen) ? "95%" : "70%",
    }))
  }, [md, isOpen])

  return (
    <DialogContent>
      <Header chat={chat}/>

      <DialogMessages>
        <DialogCenter width={contentWidth}>
          <Messages
            contentWidth={contentWidth}
            messages={messages}
          />
        </DialogCenter>
      </DialogMessages>

      <DialogCenter width={contentWidth}>
        <Form contentWidth={contentWidth}/>
      </DialogCenter>
    </DialogContent>
  )
};

export default Dialog;
