import {Box, Typography, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const DrawerTitle = ({children, sx = {}}) => {
  const theme = useTheme();

  return (
    <Box sx={{width: "100%"}}>
      <Typography
        component="h4"
        sx={{
          fontSize: "1.1rem",
          fontWeight: 500,
          color: theme.palette.text.secondary,
          ...sx,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

DrawerTitle.propTypes = {
  sx: PropTypes.object,
};

export default DrawerTitle;
