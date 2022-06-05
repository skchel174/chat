import {Drawer} from "@mui/material";
import PropTypes from "prop-types";
import {ComponentResolver, useMainPageContext} from "pages/Main/MainPageContext";

const MainPageLeft = ({width}) => {

  const styles = {
    width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width,
    },
  };

  const {leftColumn} = useMainPageContext();

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

MainPageLeft.propTypes = {
  width: PropTypes.number.isRequired,
};

export default MainPageLeft;

