import {useEffect, useState} from "react";
import {Box} from '@mui/material';
import useBreakpoints from "hooks/common/useBreakpoints";
import MainPageLeft from "pages/Main/MainPageLeft";
import MainPageMiddle from "pages/Main/MainPageMiddle";
import MainPageRight from "pages/Main/MainPageRight";
import {MainPageContext} from "pages/Main/MainPageContext";

const MainPage = () => {
  const {ex} = useBreakpoints();

  const [leftColumnWidth, setLeftColumnWidth] = useState(400);
  const [rightColumnWidth, setRightColumnWidth] = useState(350);

  useEffect(() => {
    if (ex) {
      setLeftColumnWidth(600);
      setRightColumnWidth(600);
    } else {
      setLeftColumnWidth(400);
      setRightColumnWidth(350);
    }
  }, [ex]);

  return (
    <MainPageContext>
      <Box sx={{
        display: 'flex',
      }}>
        <MainPageLeft width={leftColumnWidth}/>
        <MainPageMiddle/>
        <MainPageRight width={rightColumnWidth}/>
      </Box>
    </MainPageContext>
  );
}

export default MainPage;
