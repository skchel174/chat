import {Box} from "@mui/material";
import {ComponentResolver, useLayoutContext} from "frontend/src/pages/Main/LayoutContext";

const MiddleColumn = () => {

  const styles = {
    flexGrow: 1,
    backgroundColor: 'inherit',
  };

  const {middleColumn} = useLayoutContext();

  return (
    <Box
      component="main"
      sx={styles}
    >
      <ComponentResolver
        component={middleColumn.component}
      />
    </Box>
  );
}

export default MiddleColumn;
