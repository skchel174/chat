import {Box, useTheme} from "@mui/material";
import PropTypes from "prop-types";

export const DIRECTION = {
  RIGHT: 'tight',
  LEFT: 'Left',
}

const Appendix = ({sx, direction}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        width: "0.5rem",
        height: "1.2rem",
        transition: "opacity 200ms",
        fontSize: "1rem !important",
        transform: direction === DIRECTION.LEFT ? "scale(-1, 1)" : "none",
        ...sx,
      }}
    >
      <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
          fill={sx.color ?? theme.palette.background.primary}
        />
      </svg>
    </Box>
  );
}

Appendix.propTypes = {
  direction: PropTypes.oneOf([DIRECTION.RIGHT, DIRECTION.LEFT]).isRequired,
}

export default Appendix;
