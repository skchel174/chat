import {Box} from "@mui/material";
import {TYPE} from "./Message";
import PropTypes from "prop-types";

const MessageContainer = ({type, children}) => {
  return (
    <Box sx={{
      position: "relative",
      margin: "15px 0",
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: type === TYPE.INPUT ? "flex-start" : "flex-end",
    }}>
      {children}
    </Box>
  )
};

MessageContainer.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MessageContainer;
