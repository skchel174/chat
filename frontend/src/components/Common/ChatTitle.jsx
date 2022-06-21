import PropTypes from "prop-types";
import {Box, useTheme} from "@mui/material";

const ChatTitle = ({children, sx = {}}) => {
  const theme = useTheme();

  return (
    <Box sx={{
      fontSize: "1rem",
      lineHeight: "1.7rem",
      color: theme.palette.text.primary,
      ...sx,
    }}>
      {children}
    </Box>
  )
};

ChatTitle.propTypes = {
  children: PropTypes.string.isRequired,
  sx: PropTypes.object,
};

export default ChatTitle;
