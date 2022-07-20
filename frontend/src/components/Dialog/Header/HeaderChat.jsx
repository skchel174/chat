import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import Chat from "components/Common/Chat";
import useChat from "hooks/dialog/useChat";
import {formatVisitTime} from "helpers/formatTime";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import useSocket from "../../../hooks/common/useSocket";

const HeaderChat = ({chat}) => {
  const {title, avatar, companion} = useChat(chat);

  const online = useSelector(state => state.chats.online);

  const [subtitle, setSubtitle] = useState(null);

  const {socket} = useSocket();

  useEffect(() => console.log("HeaderCHat mounted"), [])

  useEffect(() => {
    if (chat.type === "group") {
      setSubtitle(`${chat.users.length} members`);
    } else {
      console.log(online, chat.id)
      const val = (!online.includes(companion.id))
        ? `last seen ${formatVisitTime(companion.visited_at)}`
        : "online";

      setSubtitle(val);
    }
  }, [chat.id, companion])

  const {rightColumn} = useMainPageLayout();

  const showChatInfo = () => {
    rightColumn.setComponent("Profile");
    rightColumn.open();
  };

  return (
    <Chat
      title={title}
      subtitle={subtitle}
      avatar={avatar}
      onClick={showChatInfo}
    />
  )
};

HeaderChat.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default HeaderChat;
