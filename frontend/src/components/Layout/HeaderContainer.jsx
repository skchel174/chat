import {AppBar, Toolbar, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const HeaderContainer = ({children, sx = {}}) => {
  const theme = useTheme();
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        backgroundColor: theme.palette.background.primary,
        ...sx,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          padding: ".4rem 1rem!important",
          justifyContent: "space-between",
          height: "3.8rem!important",
        }}
      >
        {children}
      </Toolbar>
    </AppBar>
  )
};

HeaderContainer.propTypes = {
  sx: PropTypes.object,
};

export default HeaderContainer;
