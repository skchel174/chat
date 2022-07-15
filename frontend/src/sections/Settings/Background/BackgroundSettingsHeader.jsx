import HeaderContainer from "components/HeaderContainer";
import {IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderTitle from "components/HeaderTitle";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import StyledIcon from "components/StyledIcon";

const BackgroundSettingsHeader = () => {
  const {leftColumn} = useMainPageLayout();

  const moveBack = () => leftColumn.setComponent("GeneralSettings");

  return (
    <HeaderContainer sx={{alignItems: "flex-start"}}>
      <IconButton onClick={moveBack}>
        <StyledIcon icon={ArrowBackIcon}/>
      </IconButton>

      <HeaderTitle>Chat Background</HeaderTitle>
    </HeaderContainer>
  );
};

export default BackgroundSettingsHeader;
