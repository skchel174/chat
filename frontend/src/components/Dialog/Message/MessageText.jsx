import {Box} from "@mui/material";

const MessageText = ({children}) => {
  return <Box sx={{
    lineHeight: "1.3",
    fontSize: ".9rem",
  }}>
    {children}
  </Box>
};

export default MessageText;
