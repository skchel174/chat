import PropTypes from "prop-types";
import {styled} from "@mui/material";
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import Menu from "components/Common/Menu";
import MenuItem from "components/Common/MenuItem";

const LeaveChannelItem = styled("div")(
  ({theme}) => ({
    "& .menu-item, .menu-item__icon": {
      color: theme.palette.text.error + "!important",
    },
  })
)

const ChatsMenu = ({position, anchor, handleClose}) => {

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
        icon={<BookmarkAddedOutlinedIcon/>}
        title="Mark as read"
        handleSelect={handleItemSelect}
      />

      <MenuItem
        icon={<PushPinOutlinedIcon/>}
        title="Pine to top"
        handleSelect={handleItemSelect}
      />

      <MenuItem
        icon={<ArchiveOutlinedIcon/>}
        title="Archive"
        handleSelect={handleItemSelect}
      />

      <MenuItem
        icon={<NotificationsNoneOutlinedIcon/>}
        title="Unmute"
        handleSelect={handleItemSelect}
      />

      <MenuItem
        icon={<FlagOutlinedIcon/>}
        title="Report"
        handleSelect={handleItemSelect}
      />

      <LeaveChannelItem>
        <MenuItem
          icon={<DeleteOutlineOutlinedIcon/>}
          title="Leave Channel"
          handleSelect={handleItemSelect}
        />
      </LeaveChannelItem>
    </Menu>
  )
};

ChatsMenu.propTypes = {
  anchor: PropTypes.object,
  position: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ChatsMenu;
