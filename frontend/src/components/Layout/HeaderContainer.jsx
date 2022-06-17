import {AppBar as MuiAppBar, styled, Toolbar as MuiToolbar} from "@mui/material";

const AppBar = styled(MuiAppBar)(
  ({theme}) => ({
    boxShadow: "none",
    backgroundColor: theme.palette.background.primary,
  })
);

const Toolbar = styled(MuiToolbar)(
  () => ({
    padding: ".4rem 1rem!important",
    justifyContent: "space-between",
    height: "3.8rem!important",
  })
);

const HeaderContainer = ({children}) => {

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {children}
      </Toolbar>
    </AppBar>
  )
}

export default HeaderContainer;
