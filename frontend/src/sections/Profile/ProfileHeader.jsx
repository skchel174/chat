import {IconButton, Stack} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HeaderContainer from "components/HeaderContainer";
import HeaderTitle from "components/HeaderTitle";
import StyledIcon from "components/StyledIcon";
import {useMainPageLayout} from "pages/MainPage/MainPageContext";

const ProfileHeader = () => {
  const {rightColumn} = useMainPageLayout();

  return (
    <HeaderContainer>
      <Stack flexDirection="row" alignItems="center">
        <IconButton onClick={rightColumn.close}>
          <StyledIcon icon={CloseIcon}/>
        </IconButton>

        <HeaderTitle>Profile</HeaderTitle>
      </Stack>
    </HeaderContainer>
  );
};

export default ProfileHeader;
