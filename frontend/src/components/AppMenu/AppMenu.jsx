import SwitchButton from "components/Common/SwitchButton";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Menu from "components/Common/Menu";
import MenuItem from "components/Common/MenuItem";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import {useDispatch} from "react-redux";
import PropTypes from "prop-types";
import {useTheme} from "@mui/material";
import {changeSettings} from "store/settingsSlice";

const AppMenu = ({position, anchor, handleClose}) => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const changeTheme = () => {
    dispatch(changeSettings({
      theme: (theme.palette.mode === "light" ? "dark" : "light"),
    }));
  };

  const handleItemSelect = () => {
    handleClose();
  };

  const {leftColumn} = useMainPageLayout();

  const openSettings = () => {
    leftColumn.setComponent("SettingsMenu");
    leftColumn.open();

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
        handleSelect={openSettings}
      />
      <MenuItem
        icon={<NightsStayOutlinedIcon/>}
        title="Night Mode"
        badge={
          <SwitchButton
            checked={theme.palette.mode === "dark"}
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
