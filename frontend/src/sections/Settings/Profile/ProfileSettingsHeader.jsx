import HeaderContainer from "components/HeaderContainer";
import {IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderTitle from "components/HeaderTitle";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";

const ProfileSettingsHeader = () => {
  const {leftColumn} = useMainPageLayout();

  const moveBack = () => leftColumn.setComponent("SettingsMenu");

  return (
    <HeaderContainer sx={{alignItems: "flex-start"}}>
      <IconButton onClick={moveBack}>
        <ArrowBackIcon/>
      </IconButton>

      <HeaderTitle>Edit Profile</HeaderTitle>
    </HeaderContainer>
  )
};

export default ProfileSettingsHeader;
