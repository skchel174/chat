import PropTypes from "prop-types";
import {Box, useTheme} from "@mui/material";

const StyledIcon = ({icon, sx = {}}) => {
  const theme = useTheme();

  const IconComponent = icon;

  return (
    <Box
      className="styled-icon"
      sx={{
        display: "flex",
        alignItems: "center",
        fontSize: "1.5rem",
        color: theme.palette.text.secondary,
        ...sx,
      }}
    >
      <IconComponent/>
    </Box>
  )
};

StyledIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  sx: PropTypes.object,
};

export default StyledIcon;
