import {Box} from "@mui/material";
import {ComponentResolver, useMainPageContext} from "pages/Main/MainPageContext";

const MainPageMiddle = () => {

  const styles = {
    flexGrow: 1,
    backgroundColor: 'inherit',
  };

  const {middleColumn} = useMainPageContext();

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

export default MainPageMiddle;
