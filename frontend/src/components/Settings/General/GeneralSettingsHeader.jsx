import {IconButton, useTheme} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderContainer from "components/Common/HeaderContainer";
import HeaderTitle from "components/Common/HeaderTitle";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";

const GeneralSettingsHeader = () => {
  const {leftColumn} = useMainPageLayout();

  const moveBack = () => leftColumn.setComponent("SettingsMenu");

  const theme = useTheme();

  return (
    <HeaderContainer sx={{
      alignItems: "flex-start",
      borderBottom: "1px solid " + theme.palette.border.primary,
    }}>
      <IconButton onClick={moveBack}>
        <ArrowBackIcon/>
      </IconButton>

      <HeaderTitle>General</HeaderTitle>
    </HeaderContainer>
  );
};

export default GeneralSettingsHeader;
