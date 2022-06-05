import {Drawer} from "@mui/material";
import PropTypes from "prop-types";
import {ComponentResolver, useLayoutContext} from "frontend/src/pages/Main/LayoutContext";

const LeftColumn = ({width}) => {

  const styles = {
    width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width,
    },
  };

  const {leftColumn} = useLayoutContext();

  return (
    <Drawer
      sx={styles}
      open={leftColumn.isOpen}
      anchor="left"
      variant="persistent"
    >
      <ComponentResolver
        component={leftColumn.component}
      />
    </Drawer>
  );
};

LeftColumn.propTypes = {
  width: PropTypes.number.isRequired,
};

export default LeftColumn;

