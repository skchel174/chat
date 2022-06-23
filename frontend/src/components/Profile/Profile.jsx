import DrawerContainer from "components/Layout/DrawerContainer";
import useChat from "hooks/useChat";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import ProfileAvatar from "./ProfileAvatar";

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
