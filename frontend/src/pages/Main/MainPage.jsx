import {useEffect, useState} from "react";
import {Box} from '@mui/material';
import useBreakpoints from "hooks/common/useBreakpoints";
import LeftColumn from "layouts/Main/LeftColumn";
import MiddleColumn from "layouts/Main/MiddleColumn";
import RightColumn from "layouts/Main/RightColumn";

const Layout = () => {
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
    <Box sx={{
      display: 'flex',
    }}>
      <LeftColumn width={leftColumnWidth}/>
      <MiddleColumn/>
      <RightColumn width={rightColumnWidth}/>
    </Box>
  );
}

export default Layout;
