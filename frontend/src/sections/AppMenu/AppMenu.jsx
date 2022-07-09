import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import Menu from "components/Common/Menu";
import MenuItem from "components/Common/MenuItem";
import AppMenuTheme from "./AppMenuTheme";
import AppMenuLogout from "./AppMenuLogout";
import AppMenuSettings from "./AppMenuSettings";
import PropTypes from "prop-types";

const AppMenu = ({position, anchor, handleClose}) => {

  const handleItemSelect = () => handleClose();

  const {leftColumn} = useMainPageLayout();

  const open = (component) => {
    leftColumn.setComponent(component);
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
        title="Saved Messages"
        icon={<BookmarkBorderOutlinedIcon/>}
        handleSelect={handleItemSelect}
      />

      <MenuItem
        title="Archived Chats"
        icon={<ArchiveOutlinedIcon/>}
        handleSelect={handleItemSelect}
      />

      <MenuItem
        title="Contacts"
        icon={<PermIdentityOutlinedIcon/>}
        handleSelect={handleItemSelect}
      />

      <AppMenuSettings handleSelect={open}/>

      <AppMenuTheme/>

      <MenuItem
        title="Support"
        icon={<HelpOutlineOutlinedIcon/>}
        handleSelect={handleItemSelect}
      />

      <AppMenuLogout/>
    </Menu>
  )
};

AppMenu.propTypes = {
  anchor: PropTypes.object,
  position: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AppMenu;
