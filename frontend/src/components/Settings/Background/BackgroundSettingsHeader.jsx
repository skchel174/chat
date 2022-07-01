import HeaderContainer from "components/Common/HeaderContainer";
import {IconButton, useTheme} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderTitle from "components/Common/HeaderTitle";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";

const BackgroundSettingsHeader = () => {
  const {leftColumn} = useMainPageLayout();

  const moveBack = () => leftColumn.setComponent("GeneralSettings");

  const theme = useTheme();

  return (
    <HeaderContainer sx={{
      alignItems: "flex-start",
      borderBottom: "1px solid " + theme.palette.border.primary,
    }}>
      <IconButton onClick={moveBack}>
        <ArrowBackIcon/>
      </IconButton>

      <HeaderTitle>Chat Background</HeaderTitle>
    </HeaderContainer>
  );
};

export default BackgroundSettingsHeader;
