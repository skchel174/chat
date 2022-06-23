import PropTypes from "prop-types";
import {styled, Typography} from "@mui/material";
import ProfileInfoItem from "./ProfileInfoItem";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SwitchButton from "components/Common/SwitchButton";
import {useState} from "react";

const Container = styled("div")(
  ({theme}) => ({
    display: "flex",
    flexDirection: "column",
    padding: ".875rem .5rem .5rem",
    boxShadow: theme.palette.shadow.inset,
    borderBottom: ".625rem solid " + theme.palette.background.secondary,
  })
);

const Icon = styled("div")(
  ({theme}) => ({
    display: "flex",
    alignItems: "center",
    marginRight: "2rem",
    fontSize: "1.5rem",
    color: theme.palette.text.secondary,
  })
);

const ProfileInfo = ({chat}) => {
  const [notifications, setNotifications] = useState(true);
  const toggleNotifications = () => setNotifications(!notifications);

  return (
    <Container>
      <ProfileInfoItem onClick={toggleNotifications}>
        <Icon>
          <NotificationsNoneOutlinedIcon/>
        </Icon>
        <Typography>Notifications</Typography>
        <SwitchButton
          checked={notifications}
          onChange={toggleNotifications}
        />
      </ProfileInfoItem>
    </Container>
  )
};

ProfileInfo.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default ProfileInfo;
