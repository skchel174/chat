import {useSelector} from "react-redux";
import formatDate from "helpers/formatDate";
import {Box, Typography, useTheme} from "@mui/material";
import SettingsMenuHeader from "./SettingsMenuHeader";
import DrawerContainer from "components/Common/DrawerContainer";
import ProfileAvatar from "components/Common/ProfileAvatar";
import ItemButton from "components/Common/ItemButton";
import StyledIcon from "components/Common/StyledIcon";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import {useMainPageLayout} from "pages/MainPage/MainPageContext";

const SettingsMenu = () => {
  const user = useSelector(state => state.user.data);

  const {leftColumn} = useMainPageLayout();

  const theme = useTheme();

  return (
    <DrawerContainer sx={{
      backgroundColor: theme.palette.background.secondary,
    }}>
      <Box sx={{
        backgroundColor: theme.palette.background.primary,
      }}>
        <SettingsMenuHeader/>

        <ProfileAvatar
          type="private"
          name={user.name}
          avatar={user.img}
          activityDate={formatDate(user.visited_at, "visit")}
        />

        <Box sx={{padding: "0.5rem 0.75rem"}}>
          <ItemButton
            sx={{justifyContent: "flex-start"}}
            onClick={() => leftColumn.setComponent("GeneralSettings")}
          >
            <StyledIcon icon={SettingsOutlinedIcon}/>
            <Typography>General Settings</Typography>
          </ItemButton>

          <ItemButton sx={{justifyContent: "flex-start"}}>
            <StyledIcon icon={NotificationsNoneOutlinedIcon}/>
            <Typography>Notifications</Typography>
          </ItemButton>

          <ItemButton sx={{justifyContent: "flex-start"}}>
            <StyledIcon icon={StorageOutlinedIcon}/>
            <Typography>Data and Storage</Typography>
          </ItemButton>

          <ItemButton sx={{justifyContent: "flex-start"}}>
            <StyledIcon icon={HttpsOutlinedIcon}/>
            <Typography>Privacy and Security</Typography>
          </ItemButton>

          <ItemButton sx={{justifyContent: "flex-start"}}>
            <StyledIcon icon={FolderSharedOutlinedIcon}/>
            <Typography>Chat Folders</Typography>
          </ItemButton>
        </Box>
      </Box>
    </DrawerContainer>
  )
};

export default SettingsMenu;
