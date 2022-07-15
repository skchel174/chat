import usePopover from "hooks/common/usePopover";
import HeaderContainer from "components/HeaderContainer";
import HeaderTitle from "components/HeaderTitle";
import Menu from "components/Menu";
import MenuItem from "components/MenuItem";
import StyledIcon from "components/StyledIcon";
import {Box, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import useAuth from "hooks/auth/useAuth";

const SettingsMenuHeader = () => {
  const {leftColumn} = useMainPageLayout();

  const popover = usePopover({
    anchor: {
      vertical: "bottom",
      horizontal: "right",
    },
    transform: {
      vertical: "top",
      horizontal: "right",
    },
  });

  const {logout} = useAuth();

  return (
    <HeaderContainer>
      <Box sx={{flex: 1}}>
        <IconButton onClick={() => leftColumn.setComponent("Chats")}>
          <StyledIcon icon={ArrowBackIcon}/>
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
          <StyledIcon icon={CreateOutlinedIcon}/>
        </IconButton>

        <IconButton onClick={popover.open}>
          <StyledIcon icon={MoreIcon}/>
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
          handleSelect={logout}
        />
      </Menu>
    </HeaderContainer>
  )
};

export default SettingsMenuHeader;
