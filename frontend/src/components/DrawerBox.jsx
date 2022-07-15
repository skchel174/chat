import {Box, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const DrawerBox = ({children, sx = {}}) => {
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1.5rem 1rem 1rem",
        backgroundColor: theme.palette.background.primary,
        boxShadow: theme.palette.shadow.inset,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

DrawerBox.propTypes = {
  sx: PropTypes.object,
};

export default DrawerBox;
