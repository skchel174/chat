import useBreakpoints from "hooks/common/useBreakpoints";
import Drawer from "components/Layout/Drawer";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import ComponentResolver from "infrastructure/Context/ComponentResolver";

const MainPageRight = ({width}) => {
  const {md} = useBreakpoints();

  const {isOpen, component} = useRightColumn();

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
