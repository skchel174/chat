import {Typography, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useMemo} from "react";
import {formatTime} from "helpers/formatTime";

const MessageMeta = ({datetime}) => {
  const theme = useTheme();

  const settings = useSelector(state => state.settings.data);

  const formattedTime = useMemo(() => {
    return formatTime(datetime, settings.timeFormat);
  }, [datetime, settings.timeFormat]);

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
      {formattedTime}
    </Typography>
  )
};

MessageMeta.propTypes = {
  time: PropTypes.string.isRequired,
};

export default MessageMeta;
