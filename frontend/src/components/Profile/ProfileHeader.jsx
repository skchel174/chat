import {IconButton, Stack} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HeaderContainer from "components/Common/HeaderContainer";
import HeaderTitle from "components/Common/HeaderTitle";
import StyledIcon from "components/Common/StyledIcon";
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
