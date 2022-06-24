import {IconButton, useTheme} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HeaderContainer from "components/Common/HeaderContainer";
import HeaderTitle from "components/Common/HeaderTitle";
import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";

const GeneralSettingsHeader = () => {
  const leftColumn = useLeftColumn();

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
