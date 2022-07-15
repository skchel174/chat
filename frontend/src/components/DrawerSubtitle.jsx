import {Box, Typography, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const DrawerSubtitle = ({children, sx = {}}) => {
  const theme = useTheme();

  return (
    <Box sx={{width: "100%"}}>
      <Typography
        component="h4"
        sx={{
          fontSize: ".875rem",
          color: theme.palette.text.secondary,
          ...sx,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

DrawerSubtitle.propTypes = {
  sx: PropTypes.object,
};

export default DrawerSubtitle;
