import PropTypes from "prop-types";
import {styled} from "@mui/material";
import {formatDate} from "helpers/formatTime";

const DateBox = styled("div")(
  () => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: ".6rem",
  })
);

const Date = styled("div")(
  ({theme}) => ({
    padding: "0 .5rem",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: ".85rem",
    fontWeight: 600,
    backgroundColor: theme.palette.background.opacity,
  })
);

const MessagesDate = ({date}) => {
  return (
    <DateBox>
      <Date>{formatDate(date)}</Date>
    </DateBox>
  )
}

MessagesDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default MessagesDate;
