import {styled} from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
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

const HeaderMenu = ({position, anchor, handleClose}) => {

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
        icon={<NotificationsNoneOutlinedIcon/>}
        title="Unmute"
        handleSelect={handleItemSelect}
      />

      <MenuItem
        icon={<CheckCircleOutlineOutlinedIcon/>}
        title="Select messages"
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

export default HeaderMenu;
