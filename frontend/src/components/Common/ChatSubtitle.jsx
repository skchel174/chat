import {Box, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const ChatSubtitle = ({children, sx = {}}) => {
  const theme = useTheme();

  return (
    <Box sx={{
        fontSize: ".85rem",
        lineHeight: "1.3rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: theme.palette.text.secondary,
        ...sx,
    }}>
      {children}
    </Box>
  )
};

ChatSubtitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ChatSubtitle;
