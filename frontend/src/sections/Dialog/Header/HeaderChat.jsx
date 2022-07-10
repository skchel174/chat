import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import Chat from "components/Chat";
import useChat from "hooks/useChat";
import PropTypes from "prop-types";

const HeaderChat = ({chat}) => {
  const {getChatInfo} = useChat();

  const {title, avatar, members, date} = getChatInfo(chat);

  const {rightColumn} = useMainPageLayout();

  const showChatInfo = () => {
    rightColumn.setComponent("Profile");
    rightColumn.open();
  }

  return (
    <Chat
      title={title}
      subtitle={chat.type === "group" ? `${members} members` : `last seen ${date}`}
      avatar={avatar}
      onClick={showChatInfo}
    />
  )
};

HeaderChat.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default HeaderChat;
