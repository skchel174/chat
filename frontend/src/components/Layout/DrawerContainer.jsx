import {styled} from "@mui/material";

const Container = styled("div")(
  ({theme}) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.priamry,
  })
);

const DrawerContainer = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
};

export default DrawerContainer;
