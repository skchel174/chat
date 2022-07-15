import DrawerContainer from "components/Common/DrawerContainer";
import ProfileAvatar from "components/Common/ProfileAvatar";
import useChat from "hooks/dialog/useChat";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import {formatVisitTime} from "helpers/formatTime";

const Profile = () => {
  const {chat} = useChat();

  const {avatar, title, companion} = useChat(chat);

  const subtitle = (chat.type === "group")
    ? "members " + chat.users.length
    : "last visit at " + formatVisitTime(companion.visited_at)

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
