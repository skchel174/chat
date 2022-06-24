import {IconButton, Stack} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import HeaderContainer from "components/Common/HeaderContainer";
import HeaderTitle from "components/Common/HeaderTitle";

const ProfileHeader = () => {
  const {close} = useRightColumn();

  return (
    <HeaderContainer>
      <Stack flexDirection="row" alignItems="center">
        <IconButton onClick={close}>
          <CloseIcon/>
        </IconButton>

        <HeaderTitle>Profile</HeaderTitle>
      </Stack>
    </HeaderContainer>
  );
};

export default ProfileHeader;
