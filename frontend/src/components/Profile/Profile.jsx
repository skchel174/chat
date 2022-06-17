import {Box, IconButton, styled} from "@mui/material";
import HeaderContainer from "components/Layout/HeaderContainer";
import CloseIcon from "@mui/icons-material/Close";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import DrawerContainer from "components/Layout/DrawerContainer";

const Title = styled("div")(
  ({theme}) => ({
    marginLeft: "1.375rem",
    fontSize: "1.25rem",
    fontWeight: 500,
    color: theme.palette.text.primary,
  })
);

const Profile = () => {
  const {close} = useRightColumn();

  return (
    <DrawerContainer>
      <HeaderContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <IconButton onClick={close}>
            <CloseIcon/>
          </IconButton>

          <Title>Profile</Title>
        </Box>
      </HeaderContainer>
    </DrawerContainer>
  )
}

export default Profile;
