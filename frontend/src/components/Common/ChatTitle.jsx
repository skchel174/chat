import PropTypes from "prop-types";
import {styled} from "@mui/material";

export const Info = styled("div")(
  () => ({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  })
);

export const Title = styled("div", {
  shouldForwardProp: (prop) => prop !== "fontWeight",
})(
  ({theme, fontWeight}) => ({
    fontSize: "1rem",
    lineHeight: "1.7rem",
    fontWeight,
    color: theme.palette.text.primary,
  })
);

const ChatTitle = ({title, fWeight = 500, children = null}) => {
  return (
    <Info className="chat__info">
      <Title
        className="chat__title"
        fontWeight={fWeight}
      >
        {title}
      </Title>

      {children}
    </Info>
  )
};

ChatTitle.propTypes = {
  title: PropTypes.string.isRequired,
  fWeight: PropTypes.number,
};

export default ChatTitle;
