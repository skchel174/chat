import DrawerContainer from "components/Common/DrawerContainer";
import ProfileAvatar from "components/Common/ProfileAvatar";
import useChat from "hooks/dialog/useChat";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import {formatVisitTime} from "helpers/formatTime";
import {useSelector} from "react-redux";

const Profile = () => {
  const {chat} = useChat();

  const {avatar, title, companion} = useChat(chat);

  const online = useSelector(state => state.chats.online);

  let subtitle;

  if (chat.type === "group") {
    subtitle = "members " + chat.users.length;
  } else {
    subtitle = !online.includes(companion?.id)
      ? "last visit " + formatVisitTime(companion.visited_at)
      : "online";
  }

  return (
    <DrawerContainer>
      <ProfileHeader/>

      <ProfileAvatar
        avatar={avatar}
        title={title}
        subtitle={subtitle}
      />

      <ProfileInfo chat={chat}/>
    </DrawerContainer>
  )
}

export default Profile;
