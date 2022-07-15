import {Box, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const DrawerContainer = ({children, sx = {}}) => {
  const theme = useTheme();

  return (
    <Box sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.priamry,
      ...sx,
    }}>
      {children}
    </Box>
  )
};

DrawerContainer.propTypes = {
  sx: PropTypes.object,
};

export default DrawerContainer;
