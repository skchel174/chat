import {Stack} from "@mui/material";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import ChatTitle from "components/Common/ChatTitle";
import ChatSubtitle from "components/Common/ChatSubtitle";
import ChatAvatar from "components/Common/ChatAvatar";
import useChatInfo from "hooks/useChatInfo";
import PropTypes from "prop-types";

const HeaderChat = ({chat}) => {
  const {title, avatar, members, activityDate} = useChatInfo(chat);
  const {open, setComponent} = useRightColumn();

  const showChatInfo = () => {
    setComponent("Profile");
    open();
  }

  return (
    <Stack direction="row">
      <ChatAvatar
        sx={{
          width: "3rem",
          height: "3rem",
          marginRight: ".5rem",
        }}
        img={avatar}
        name={title[0]}
      />

      <Stack
        sx={{cursor: "pointer"}}
        onClick={showChatInfo}
      >
        <ChatTitle sx={{fontWeight: 600}}>
          {title}
        </ChatTitle>
        {
          chat.type === "group"
            ? <ChatSubtitle>{members} members</ChatSubtitle>
            : <ChatSubtitle>Last seen {activityDate}</ChatSubtitle>
        }
      </Stack>
    </Stack>
  )
};

HeaderChat.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default HeaderChat;
