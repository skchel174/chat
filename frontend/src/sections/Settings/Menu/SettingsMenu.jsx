import {useSelector} from "react-redux";
import {Box, Typography, useTheme} from "@mui/material";
import SettingsMenuHeader from "./SettingsMenuHeader";
import DrawerContainer from "components/DrawerContainer";
import ProfileAvatar from "components/ProfileAvatar";
import ItemButton from "components/ItemButton";
import StyledIcon from "components/StyledIcon";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import {formatVisitTime} from "helpers/formatTime";

const SettingsMenu = () => {
  const user = useSelector(state => state.user.data);

  const {leftColumn} = useMainPageLayout();

  const theme = useTheme();

  return (
    <DrawerContainer sx={{backgroundColor: theme.palette.background.secondary}}>
      <Box sx={{backgroundColor: theme.palette.background.primary}}>
        <SettingsMenuHeader/>

        <ProfileAvatar
          avatar={user.img}
          title={user.name}
          subtitle={"last visit at " + formatVisitTime(user.visited_at)}
        />

        <Box sx={{padding: "0.5rem 0.75rem"}}>
          <ItemButton
            sx={{justifyContent: "flex-start"}}
            onClick={() => leftColumn.setComponent("GeneralSettings")}
          >
            <StyledIcon
              sx={{marginRight: "2rem"}}
              icon={SettingsOutlinedIcon}
            />
            <Typography>General Settings</Typography>
          </ItemButton>

          <ItemButton sx={{justifyContent: "flex-start"}}>
            <StyledIcon
              sx={{marginRight: "2rem"}}
              icon={NotificationsNoneOutlinedIcon}
            />
            <Typography>Notifications</Typography>
          </ItemButton>

          <ItemButton sx={{justifyContent: "flex-start"}}>
            <StyledIcon
              sx={{marginRight: "2rem"}}
              icon={StorageOutlinedIcon}
            />
            <Typography>Data and Storage</Typography>
          </ItemButton>

          <ItemButton sx={{justifyContent: "flex-start"}}>
            <StyledIcon
              sx={{marginRight: "2rem"}}
              icon={HttpsOutlinedIcon}
            />
            <Typography>Privacy and Security</Typography>
          </ItemButton>

          <ItemButton sx={{justifyContent: "flex-start"}}>
            <StyledIcon
              sx={{marginRight: "2rem"}}
              icon={FolderSharedOutlinedIcon}
            />
            <Typography>Chat Folders</Typography>
          </ItemButton>
        </Box>
      </Box>
    </DrawerContainer>
  )
};

export default SettingsMenu;
