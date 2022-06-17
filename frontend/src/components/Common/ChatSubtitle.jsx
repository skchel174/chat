import {Box, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const ChatSubtitle = ({content}) => {
  const theme = useTheme();

  return (
    <Box
      className="chat__subtitle"
      sx={{
        lineHeight: "1.3rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: ".85rem",
        color: theme.palette.text.secondary,
      }}
    >
      {content}
    </Box>
  )
};

ChatSubtitle.propTypes = {
  content: PropTypes.string.isRequired,
};

export default ChatSubtitle;
