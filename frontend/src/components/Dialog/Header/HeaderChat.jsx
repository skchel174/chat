import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import Chat from "components/Common/Chat";
import useChat from "hooks/dialog/useChat";
import {formatVisitTime} from "helpers/formatTime";
import PropTypes from "prop-types";

const HeaderChat = ({chat}) => {
  const {title, avatar, companion} = useChat(chat);

  const {rightColumn} = useMainPageLayout();

  const date = companion !== null && formatVisitTime(companion.visited_at)

  const showChatInfo = () => {
    rightColumn.setComponent("Profile");
    rightColumn.open();
  }

  return (
    <Chat
      title={title}
      subtitle={chat.type === "group" ? `${chat.users.length} members` : `last seen ${date}`}
      avatar={avatar}
      onClick={showChatInfo}
    />
  )
};

HeaderChat.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default HeaderChat;
