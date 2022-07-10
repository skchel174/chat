import DrawerContainer from "components/DrawerContainer";
import ProfileAvatar from "components/ProfileAvatar";
import useChat from "hooks/useChat";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const {chat, getChatInfo} = useChat();

  const {title, avatar, members, date} = getChatInfo(chat);

  return (
    <DrawerContainer>
      <ProfileHeader/>

      <ProfileAvatar
        type={chat.type}
        name={title}
        avatar={avatar}
        members={members}
        activityDate={date}
      />

      <ProfileInfo chat={chat}/>
    </DrawerContainer>
  )
}

export default Profile;
