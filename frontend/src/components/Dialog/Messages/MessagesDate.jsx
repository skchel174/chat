import {styled} from "@mui/material";
import PropTypes from "prop-types";

const Root = styled("div")(
  () => ({
    position: "sticky",
    top: "0",
    zIndex: 100,
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
    <Root>
      <Date>{date}</Date>
    </Root>
  )
}

MessagesDate.propTypes = {
  date: PropTypes.string.isRequired,
};

export default MessagesDate;
