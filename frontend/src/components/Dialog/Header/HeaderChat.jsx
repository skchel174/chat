import {Box, styled} from "@mui/material";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import formatDate from "helpers/formatDate";
import PropTypes from "prop-types";
import ChatAvatar from "components/Common/ChatAvatar";
import ChatTitle from "components/Common/ChatTitle";
import ChatSubtitle from "components/Common/ChatSubtitle";

const Chat = styled("div")(
  () => ({
    display: "flex",
    alignItems: "center",
    height: "100%",
    overflow: "hidden",

    "& .chat": {
      "&__info": {
        cursor: "pointer",
      }
    }
  })
);

const HeaderChat = ({chat}) => {

  const {open, setComponent} = useRightColumn();

  const showChatInfo = () => {
    setComponent("Profile");
    open();
  }

  return (
    <Chat className="header__chat">
      <ChatAvatar
        img={chat.img}
        alt={chat.name}
      />

      <Box onClick={showChatInfo}>
        <ChatTitle
          title={chat.name}
          fWeight={600}
        >
          {
            chat.type === "group"
              ? <ChatSubtitle content={chat.members + " members"}/>
              : <ChatSubtitle content={"Last seen " + formatDate(chat.visit, "visit")}/>
          }
        </ChatTitle>
      </Box>
    </Chat>
  )
};

HeaderChat.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default HeaderChat;
