import {IconButton, Stack, styled} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import HeaderContainer from "components/Layout/HeaderContainer";

const Title = styled("div")(
  ({theme}) => ({
    marginLeft: "1.375rem",
    fontSize: "1.25rem",
    fontWeight: 500,
    color: theme.palette.text.primary,
  })
);

const ProfileHeader = () => {
  const {close} = useRightColumn();

  return (
    <HeaderContainer>
      <Stack flexDirection="row" alignItems="center">
        <IconButton onClick={close}>
          <CloseIcon/>
        </IconButton>

        <Title>Profile</Title>
      </Stack>
    </HeaderContainer>
  );
};

export default ProfileHeader;
