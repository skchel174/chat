import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";
import usePopover from "hooks/common/usePopover";
import HeaderContainer from "components/Common/HeaderContainer";
import HeaderTitle from "components/Common/HeaderTitle";
import Menu from "components/Common/Menu";
import MenuItem from "components/Common/MenuItem";
import {Box, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const SettingsMenuHeader = () => {
  const leftColumn = useLeftColumn();

  const popover = usePopover({
    anchor: {
      vertical: "bottom",
      horizontal: "left",
    },
    transform: {
      vertical: "top",
      horizontal: "right",
    },
  });

  return (
    <HeaderContainer>
      <Box sx={{flex: 1}}>
        <IconButton onClick={() => leftColumn.setComponent("Chats")}>
          <ArrowBackIcon/>
        </IconButton>
      </Box>

      <Box sx={{flex: 5}}>
        <HeaderTitle>Settings</HeaderTitle>
      </Box>

      <Box sx={{display: "flex", flex: 2}}>
        <IconButton
          sx={{marginRight: ".2rem"}}
          onClick={() => leftColumn.setComponent("ProfileSettings")}
        >
          <CreateOutlinedIcon/>
        </IconButton>

        <IconButton onClick={popover.open}>
          <MoreIcon/>
        </IconButton>
      </Box>

      <Menu
        position={popover.position}
        anchor={popover.anchor}
        handleClose={popover.close}
      >
        <MenuItem
          icon={<LogoutOutlinedIcon/>}
          title="Log Out"
          handleSelect={popover.close}
        />
      </Menu>
    </HeaderContainer>
  )
};

export default SettingsMenuHeader;
