import {Box, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const MessageBox = ({type, children}) => {
  const theme = useTheme();

  return (
    <Box sx={{
      position: "relative",
      maxWidth: "70%",
      cursor: "pointer",
      padding: "10px 15px",
      borderRadius: type === "input" ? "15px 15px 15px 0" : "15px 15px 0 15px",
      backgroundColor: type === "input"
        ? theme.palette.background.primary
        : theme.palette.background.success,
    }}>
      {children}
    </Box>
  )
};

MessageBox.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MessageBox;
