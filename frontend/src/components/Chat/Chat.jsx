import PropTypes from "prop-types";
import {Box} from "@mui/material";
import ChatContainer from "./ChatContainer";
import ChatDate from "./ChatDate";
import ChatAvatar from "components/Common/ChatAvatar";
import ChatTitle from "components/Common/ChatTitle";
import ChatSubtitle from "components/Common/ChatSubtitle";

const Chat = ({chat, selected, handleLeftClick, handleRightClick}) => {
  return (
    <Box
      className="chat-folders__folder"
      sx={{
        width: "100%",
        overflow: "hidden",
      }}
      onClick={() => handleLeftClick(chat.id)}
      onContextMenu={handleRightClick}
    >
      <ChatContainer active={selected}>
        <ChatAvatar
          img={chat.img}
          alt={chat.name}
        />

        <ChatTitle
          title={chat.name}
          fWeight={400}
        >
          <ChatSubtitle content={chat.message.text}/>
        </ChatTitle>

        <ChatDate date={chat.visit}/>
      </ChatContainer>
    </Box>
  );
};

Chat.propTypes = {
  chat: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  handleLeftClick: PropTypes.func.isRequired,
  handleRightClick: PropTypes.func.isRequired,
};

export default Chat;
