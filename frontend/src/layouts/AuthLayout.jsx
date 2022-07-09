import {styled} from "@mui/material";
import {Outlet} from "react-router-dom";

const RootStyle = styled("div")(
  ({theme}) => ({
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.secondary,
  })
);

const ContentStyle = styled("div")(
  ({theme}) => ({
    width: "100%",
    maxWidth: "32rem",
    padding: "0 1rem",
    backgroundColor: theme.palette.background.secondary,
  })
);

const AuthLayout = () => {
  return (
    <RootStyle>
      <ContentStyle>
        <Outlet/>
      </ContentStyle>
    </RootStyle>
  )
};

export default AuthLayout;
