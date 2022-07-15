import {Drawer as MuiDrawer, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const Drawer = ({anchor, width, open, variant, children}) => {
  const theme = useTheme();

  return (
    <MuiDrawer
      open={open}
      anchor={anchor}
      variant={variant}
      sx={{
        width,

        "& .MuiDrawer-paper": {
          width: "100%",
          minWidth: "350px",
          maxWidth: width,
          backgroundColor: theme.palette.background.primary,
        },

        "& .MuiBackdrop-root": {
          display: "none",
        }
      }}
    >
      {children}
    </MuiDrawer>
  )
};

Drawer.propTypes = {
  width: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.oneOf(["right", "left"]).isRequired,
  variant: PropTypes.oneOf(["persistent", "temporary"]),
}

export default Drawer;
