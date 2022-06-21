import {useTheme} from "@mui/material";
import Appendix from "components/Common/Appendix";
import {DIRECTION} from "components/Common/Appendix"
import PropTypes from "prop-types";

const MessageAppendix = ({type}) => {
  const theme = useTheme();

  return (
    <Appendix
      direction={
        type === "input"
          ? DIRECTION.LEFT
          : DIRECTION.RIGHT
      }
      sx={{
        bottom: "-0.14rem",
        left: type === "input" ? "-0.4rem" : "auto",
        right: type === "output" ? "-0.5rem" : "auto",
        color: type === "input"
          ? theme.palette.background.primary
          : theme.palette.background.success,
      }}
    />
  )
};

MessageAppendix.propTypes = {
  type: PropTypes.string.isRequired,
};

export default MessageAppendix;
