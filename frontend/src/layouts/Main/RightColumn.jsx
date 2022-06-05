import {Drawer} from "@mui/material";
import PropTypes from "prop-types";
import {ComponentResolver, useLayoutContext} from "./LayoutContext";

const RightColumn = ({width}) => {

  const styles = {
    width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width,
    },
  };

  const {rightColumn} = useLayoutContext();

  return (
    <Drawer
      sx={styles}
      open={rightColumn.isOpen}
      anchor="right"
      variant='persistent'
    >
      <ComponentResolver
        component={rightColumn.component}
      />
    </Drawer>
  );
};

RightColumn.propTypes = {
  width: PropTypes.number.isRequired,
};

export default RightColumn;
