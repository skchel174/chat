import HeaderContainer from "components/Common/HeaderContainer";
import {IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderTitle from "components/Common/HeaderTitle";
import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";

const ProfileSettingsHeader = () => {
  const leftColumn = useLeftColumn();

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
