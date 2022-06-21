import PropTypes from "prop-types";
import {CircularProgress, styled, Zoom} from "@mui/material";

const ProgressContainer = styled("div")(
  () => ({
    display: "flex",
    justifyContent: "center",
  })
);

const ProgressWrapper = styled("div")(
  ({theme}) => ({
    margin: "2rem 0",
    width: "3rem",
    height: "3rem",
    borderRadius: "2rem",
    backgroundColor: theme.palette.background.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

const MessagesScroll = ({show = false}) => {
  return (
    <ProgressContainer>
      <Zoom in={show} unmountOnExit>
        <ProgressWrapper>
          <CircularProgress size="2rem"/>
        </ProgressWrapper>
      </Zoom>
    </ProgressContainer>
  )
};

MessagesScroll.propTypes = {
  show: PropTypes.bool,
};

export default MessagesScroll;
