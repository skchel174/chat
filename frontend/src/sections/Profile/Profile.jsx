import DrawerContainer from "components/DrawerContainer";
import ProfileAvatar from "components/ProfileAvatar";
import useChat from "hooks/dialog/useChat";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {
  const {chat} = useChat();

  return (
    <DrawerContainer>
      <ProfileHeader/>
      <ProfileAvatar chat={chat}/>
      <ProfileInfo chat={chat}/>
    </DrawerContainer>
  )
}

export default Profile;
