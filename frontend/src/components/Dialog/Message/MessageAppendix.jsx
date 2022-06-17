import {useTheme} from "@mui/material";
import Appendix from "components/Common/Appendix";
import {DIRECTION} from "components/Common/Appendix"
import {TYPE} from "./Message";
import PropTypes from "prop-types";

const MessageAppendix = ({type}) => {
  const theme = useTheme();

  return (
    <Appendix
      direction={
        type === TYPE.INPUT
          ? DIRECTION.LEFT
          : DIRECTION.RIGHT
      }
      sx={{
        bottom: "-0.14rem",
        left: type === TYPE.INPUT ? "-0.4rem" : "auto",
        right: type === TYPE.OUTPUT ? "-0.51rem" : "auto",
        color: type === TYPE.INPUT
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
