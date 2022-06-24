import useBreakpoints from "hooks/common/useBreakpoints";
import Drawer from "components/Common/Drawer";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import ComponentResolver from "infrastructure/Context/ComponentResolver";
import {useEffect} from "react";

const MainPageRight = () => {
  const {md, lg, ex} = useBreakpoints();

  const {width, setWidth, isOpen, component} = useRightColumn();

  useEffect(() => {
    if (ex) {
      setWidth(600);
    } else if (lg) {
      setWidth(365);
    } else {
      setWidth(400);
    }
  }, [ex, lg]);

  return (
    <Drawer
      anchor="right"
      elevation={md ? 5 : 0}
      width={width}
      open={isOpen}
      variant={md ? "temporary" : "persistent"}
    >
      {
        component && <ComponentResolver is={component}/>
      }
    </Drawer>
  )
}

export default MainPageRight;
