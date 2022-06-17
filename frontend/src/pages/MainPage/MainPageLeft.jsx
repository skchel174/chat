import {useEffect} from "react";
import {useLeftColumn} from "infrastructure/Context/LeftColumnContext";
import ComponentResolver from "infrastructure/Context/ComponentResolver";
import Drawer from "components/Layout/Drawer";
import useBreakpoints from "hooks/common/useBreakpoints";

const MainPageLeft = ({width}) => {
  const {isOpen, open, component, setComponent} = useLeftColumn();

  useEffect(() => setComponent("Chats"), []);

  const {ex} = useBreakpoints();

  useEffect(() => {
    if (!ex) {
      open();
    }
  }, [ex]);

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
