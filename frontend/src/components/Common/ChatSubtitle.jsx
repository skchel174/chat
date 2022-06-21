import {Box, useTheme} from "@mui/material";

const ChatSubtitle = ({children, sx = {}}) => {
  const theme = useTheme();

  return (
    <Box
      className="chat-subtitle"
      sx={{
        fontSize: ".85rem",
        lineHeight: "1.3rem",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        color: theme.palette.text.secondary,
        ...sx,
      }}
    >
      {children}
    </Box>
  )
};

export default ChatSubtitle;
