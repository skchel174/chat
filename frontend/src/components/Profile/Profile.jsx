import DrawerContainer from "components/Common/DrawerContainer";
import useChat from "hooks/useChat";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileAvatar from "components/Common/ProfileAvatar";
import useChatInfo from "hooks/useChatInfo";

const Profile = () => {
  const {chat} = useChat();

  const {title, avatar, members, activityDate} = useChatInfo(chat);

  return (
    <DrawerContainer>
      <ProfileHeader/>

      <ProfileAvatar
        type={chat.type}
        name={title}
        avatar={avatar}
        members={members}
        activityDate={activityDate}
      />

      <ProfileInfo chat={chat}/>
    </DrawerContainer>
  )
}

export default Profile;
