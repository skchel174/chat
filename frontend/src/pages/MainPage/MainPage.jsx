import {Box} from '@mui/material';
import MainPageLeft from "./MainPageLeft";
import MainPageRight from "./MainPageRight";
import MainPageCenter from "./MainPageCenter";
import LeftColumnContext from "infrastructure/Context/LeftColumnContext";
import CenterContext from "infrastructure/Context/CenterContext";
import RightColumnContext from "infrastructure/Context/RightColumnContext";

const MainPage = () => {
  return (
    <LeftColumnContext>
      <CenterContext>
        <RightColumnContext>
          <Box sx={{
            height: "100%",
            display: "flex",
          }}>
            <MainPageLeft/>
            <MainPageCenter/>
            <MainPageRight/>
          </Box>
        </RightColumnContext>
      </CenterContext>
    </LeftColumnContext>
  );
}

export default MainPage;
