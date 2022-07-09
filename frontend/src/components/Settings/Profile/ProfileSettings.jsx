import {Fab, Slide, useTheme} from "@mui/material";
import {useSelector} from "react-redux";
import DrawerContainer from "components/Common/DrawerContainer";
import DrawerBox from "components/Common/DrawerBox";
import InputField from "components/Common/InputField";
import DrawerTitle from "components/Common/DrawerTitle";
import DrawerSubtitle from "components/Common/DrawerSubtitle";
import useInput from "hooks/common/useInput";
import ProfileSettingsHeader from "./ProfileSettingsHeader";
import {useState} from "react";
import ProfileSettingsAvatar from "./ProfileSettingsAvatar";
import CheckIcon from '@mui/icons-material/Check';

const ProfileSettings = () => {
  const profile = useSelector(state => state.user.data);

  const avatar = useInput('');
  const name = useInput(profile.name);
  const bio = useInput(profile.bio);
  const email = useInput(profile.email);
  const login = useInput(profile.login);
  const password = useInput('');

  const [profileChanged, setProfileChanged] = useState(false);

  const changeProfile = (event, handler) => {
    setProfileChanged(true);
    handler(event);
  };

  const [error, setError] = useState(null);

  const handleSubmit = () => {};

  const theme = useTheme();

  return (
    <DrawerContainer sx={{
      position: "relative",
      backgroundColor: theme.palette.background.secondary,
    }}>
      <ProfileSettingsHeader/>

      <DrawerBox sx={{marginBottom: ".625rem"}}>
        <ProfileSettingsAvatar
          avatar={profile.img}
          onChange={event => changeProfile(event, avatar.handleInput)}
        />

        <InputField
          sx={{marginBottom: "1rem"}}
          label="Name"
          value={name.value}
          onChange={event => changeProfile(event, name.handleInput)}
          onError={setError}
          required
        />

        <InputField
          sx={{marginBottom: "1rem"}}
          label="Bio"
          value={bio.value}
          onChange={event => changeProfile(event, bio.handleInput)}
        />

        <DrawerSubtitle sx={{marginBottom: "1.5rem"}}>
          Any details such as age, occupation or city.<br/>
          Example: 23 y.o. designer from San Francisco
        </DrawerSubtitle>
      </DrawerBox>

      <DrawerBox sx={{marginBottom: ".625rem"}}>
        <DrawerTitle sx={{marginBottom: "2rem"}}>
          Login & Password
        </DrawerTitle>

        <InputField
          sx={{marginBottom: "1rem"}}
          label="Email"
          type="email"
          value={email.value}
          onChange={event => changeProfile(event, email.handleInput)}
          onError={setError}
          required
        />

        <InputField
          sx={{marginBottom: "1rem"}}
          label="Login"
          value={login.value}
          onChange={event => changeProfile(event, login.handleInput)}
          onError={setError}
          required
          min={3}
        />

        <InputField
          sx={{marginBottom: "1rem"}}
          type="password"
          label="Password"
          value={password.value}
          onChange={event => changeProfile(event, password.handleInput)}
          onError={setError}
          min={6}
        />

        <DrawerSubtitle sx={{marginBottom: "1.5rem"}}>
          You can use a–z, 0–9 and underscores.<br/>
          Minimum password length is 6 characters. <br/>
          Login must be unique.
        </DrawerSubtitle>
      </DrawerBox>

      <Slide
        direction="up"
        in={profileChanged}
        mountOnEnter
        unmountOnExit
      >
        <Fab
          sx={{
            position: "absolute",
            right: "1.5rem",
            bottom: "1.5rem",
          }}
          color="primary"
          onClick={handleSubmit}
        >
          <CheckIcon/>
        </Fab>
      </Slide>
    </DrawerContainer>
  );
};

export default ProfileSettings;
