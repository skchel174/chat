import {Drawer} from "@mui/material";
import PropTypes from "prop-types";
import {ComponentResolver, useMainPageContext} from "pages/Main/MainPageContext";

const MainPageRight = ({width}) => {

  const styles = {
    width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width,
    },
  };

  const {rightColumn} = useMainPageContext();

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

MainPageRight.propTypes = {
  width: PropTypes.number.isRequired,
};

export default MainPageRight;
