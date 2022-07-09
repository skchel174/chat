import PropTypes from "prop-types";
import {useState} from "react";
import {styled, Typography} from "@mui/material";
import ItemButton from "components/ItemButton";
import StyledIcon from "components/StyledIcon";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SwitchButton from "components/SwitchButton";

const Container = styled("div")(
  ({theme}) => ({
    display: "flex",
    flexDirection: "column",
    padding: ".875rem .5rem .5rem",
    boxShadow: theme.palette.shadow.inset,
    borderBottom: ".625rem solid " + theme.palette.background.secondary,
  })
);

const ProfileInfo = ({chat}) => {
  const [notifications, setNotifications] = useState(true);
  const toggleNotifications = () => setNotifications(!notifications);

  return (
    <Container>
      <ItemButton onClick={toggleNotifications}>
        <StyledIcon
          sx={{marginRight: "2rem"}}
          icon={NotificationsNoneOutlinedIcon}
        />
        <Typography>Notifications</Typography>
        <SwitchButton
          checked={notifications}
          onChange={toggleNotifications}
        />
      </ItemButton>
    </Container>
  )
};

ProfileInfo.propTypes = {
  chat: PropTypes.object.isRequired,
};

export default ProfileInfo;
