import {useEffect} from "react";
import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";
import ComponentResolver from "infrastructure/Context/ComponentResolver";
import Drawer from "components/Common/Drawer";
import useBreakpoints from "hooks/common/useBreakpoints";

const MainPageLeft = () => {
  const {width, setWidth, isOpen, open, component, setComponent} = useLeftColumn();

  useEffect(() => {
    setComponent("Chats")
  }, []);

  const {ex, sm, lg} = useBreakpoints();

  useEffect(() => {
    if (ex) {
      setWidth(600);
    } else if (sm) {
      setWidth(365);
    } else {
      setWidth(400);
    }

    if (!ex) {
      open();
    }
  }, [ex, sm, lg]);

  return (
    <Drawer
      anchor="left"
      elevation={0}
      width={width}
      open={isOpen}
      variant={isOpen ? "persistent" : "temporary"}
    >
      {
        component && <ComponentResolver is={component}/>
      }
    </Drawer>
  )
}

export default MainPageLeft;
