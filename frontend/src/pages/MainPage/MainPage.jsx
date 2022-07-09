import {Box} from '@mui/material';
import MainPageContext from "pages/MainPage/MainPageContext";
import MainPageLeft from "./MainPageLeft";
import MainPageRight from "./MainPageRight";
import MainPageMiddle from "./MainPageMiddle";

const MainPage = () => {
  return (
    <MainPageContext>
      <Box sx={{
        height: "100%",
        display: "flex",
      }}>
        <MainPageLeft/>
        <MainPageMiddle/>
        <MainPageRight/>
      </Box>
    </MainPageContext>
  );
}

export default MainPage;
