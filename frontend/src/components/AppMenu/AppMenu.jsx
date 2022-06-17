import SwitchButton from "components/Common/SwitchButton";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {useState} from "react";
import PropTypes from "prop-types";
import Menu from "components/Common/Menu";
import MenuItem from "components/Common/MenuItem";

const AppMenu = ({position, anchor, handleClose}) => {
  const [nightTheme, setNightTheme] = useState(false);
  const changeTheme = () => setNightTheme(!nightTheme);

  const handleItemSelect = () => {
    handleClose();
  };

  return (
    <Menu
      position={position}
      anchor={anchor}
      handleClose={handleClose}
    >
      <MenuItem
        icon={<BookmarkBorderOutlinedIcon/>}
        title="Saved Messages"
        handleSelect={handleItemSelect}
      />
      <MenuItem
        icon={<ArchiveOutlinedIcon/>}
        title="Archived Chats"
        handleSelect={handleItemSelect}
      />
      <MenuItem
        icon={<PermIdentityOutlinedIcon/>}
        title="Contacts"
        handleSelect={handleItemSelect}
      />
      <MenuItem
        icon={<SettingsOutlinedIcon/>}
        title="Settings"
        handleSelect={handleItemSelect}
      />
      <MenuItem
        icon={<NightsStayOutlinedIcon/>}
        title="Night Mode"
        badge={
          <SwitchButton
            checked={nightTheme}
            onChange={changeTheme}
          />
        }
        handleSelect={changeTheme}
      />
      <MenuItem
        icon={<HelpOutlineOutlinedIcon/>}
        title="Support"
        handleSelect={handleItemSelect}
      />
      <MenuItem
        icon={<LogoutOutlinedIcon/>}
        title="Log Out"
        handleSelect={handleItemSelect}
      />
    </Menu>
  )
};

AppMenu.propTypes = {
  anchor: PropTypes.object,
  position: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AppMenu;
