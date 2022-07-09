import {LinearProgress, Typography, styled, useTheme} from "@mui/material";

const RootStyle = styled("div")(
  ({theme}) => ({
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.secondary,
  })
);

const CenterStyle = styled("div")(
  () => ({
    height: "100%",
    width: "100%",
    maxWidth: "35rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  })
);

const AppLoading = () => {

  const theme = useTheme();

  return (
    <RootStyle>
      <CenterStyle>
        <Typography
          variant="h6"
          sx={{marginBottom: ".5rem"}}
          color={theme.palette.text.secondary}
        >
          Loading...
        </Typography>

        <LinearProgress sx={{
          width: "100%",
          borderRadius: ".75rem",
        }}/>
      </CenterStyle>
    </RootStyle>
  )
}

export default AppLoading;
