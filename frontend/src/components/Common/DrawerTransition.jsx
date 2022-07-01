import {Box, Fade} from "@mui/material";
import PropTypes from "prop-types";

const DrawerTransition = ({show, children}) => {
  return (
    <Fade
      in={show}
      exit={false}
      timeout={500}
      unmountOnExit
    >
      <Box sx={{height: "100%"}}>
        {children}
      </Box>
    </Fade>
  )
}

DrawerTransition.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default DrawerTransition;
