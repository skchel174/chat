import PropTypes from "prop-types";
import formatDate from "helpers/formatDate";
import {Box, useTheme} from "@mui/material";

const ChatDate = ({date}) => {
  const formattedDate = formatDate(date, "datetime");

  const theme = useTheme();

  return (
    <Box
      className="folder__date"
      sx={{
        position: "absolute",
        top: ".7rem",
        right: ".5rem",
        fontSize: ".7rem",
        color: theme.palette.text.secondary,
      }}
    >
      {formattedDate}
    </Box>
  )
};

ChatDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default ChatDate;
