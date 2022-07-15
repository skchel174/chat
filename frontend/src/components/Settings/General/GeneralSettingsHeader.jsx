import {IconButton, useTheme} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderContainer from "components/Common/HeaderContainer";
import HeaderTitle from "components/Common/HeaderTitle";
import StyledIcon from "components/Common/StyledIcon";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";

const GeneralSettingsHeader = () => {
  const {leftColumn} = useMainPageLayout();

  const moveBack = () => leftColumn.setComponent("SettingsMenu");

  return (
    <HeaderContainer sx={{alignItems: "flex-start"}}>
      <IconButton onClick={moveBack}>
        <StyledIcon icon={ArrowBackIcon}/>
      </IconButton>

      <HeaderTitle>General</HeaderTitle>
    </HeaderContainer>
  );
};

export default GeneralSettingsHeader;
