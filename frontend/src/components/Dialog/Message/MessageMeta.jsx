import {Typography, useTheme} from "@mui/material";
import PropTypes from "prop-types";

const MessageMeta = ({time}) => {
  const theme = useTheme();

  return (
    <Typography
      component="span"
      sx={{
        position: "relative",
        top: "0.6rem",
        bottom: "auto",
        float: "right",
        lineHeight: "1.3",
        marginLeft: "0.4rem",
        marginRight: "-0.4rem",
        fontSize: ".75rem",
        color: theme.palette.text.secondary,
      }}
    >
      {time}
    </Typography>
  )
};

MessageMeta.propTypes = {
  time: PropTypes.string.isRequired,
};

export default MessageMeta;
