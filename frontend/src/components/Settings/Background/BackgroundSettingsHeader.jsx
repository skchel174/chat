import HeaderContainer from "components/Common/HeaderContainer";
import {IconButton} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderTitle from "components/Common/HeaderTitle";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";
import StyledIcon from "components/Common/StyledIcon";

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
