import {Box} from "@mui/material";
import PropTypes from "prop-types";

const DialogCenter = ({width, children}) => {
  return (
    <Box sx={{
      ...width,
    }}>
      {children}
    </Box>
  )
}

DialogCenter.propTypes = {
  width: PropTypes.object.isRequired,
};

export default DialogCenter;
