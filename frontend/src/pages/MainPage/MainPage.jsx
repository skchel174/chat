import {useEffect, useState} from "react";
import useBreakpoints from "hooks/common/useBreakpoints";
import {Box} from '@mui/material';
import MainPageLeft from "./MainPageLeft";
import MainPageRight from "./MainPageRight";
import MainPageMiddle from "./MainPageMiddle";
import LeftColumnContext from "infrastructure/Context/LeftColumnContext";
import CenterContext from "infrastructure/Context/CenterContext";
import RightColumnContext from "infrastructure/Context/RightColumnContext";

const MainPage = () => {
  const {ex, lg} = useBreakpoints();

  const [leftColumnWidth, setLeftColumnWidth] = useState(400);
  const [rightColumnWidth, setRightColumnWidth] = useState(400);

  useEffect(() => {
    if (ex) {
      setLeftColumnWidth(600);
      setRightColumnWidth(600);
    } else if (lg) {
      setRightColumnWidth(365);
      setLeftColumnWidth(365);
    } else {
      setRightColumnWidth(400);
      setLeftColumnWidth(400);
    }
  }, [ex, lg]);

  return (
    <LeftColumnContext>
      <CenterContext>
        <RightColumnContext>
          <Box sx={{
            height: "100%",
            display: "flex",
          }}>
            <MainPageLeft width={leftColumnWidth}/>

            <MainPageMiddle rightOffset={rightColumnWidth}/>

            <MainPageRight width={rightColumnWidth}/>
          </Box>
        </RightColumnContext>
      </CenterContext>
    </LeftColumnContext>
  );
}

export default MainPage;
