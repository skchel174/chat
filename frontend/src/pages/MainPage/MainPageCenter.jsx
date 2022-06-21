import Center from "components/Layout/Center";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import {useCenter} from "infrastructure/Context/CenterContext";
import ComponentResolver from "infrastructure/Context/ComponentResolver";

const MainPageCenter = () => {
  const rightColumn = useRightColumn();

  const {component} = useCenter();

  return (
    <Center
      isRightOffset={rightColumn.isOpen}
      rightOffset={rightColumn.width}
    >
      {
        component && <ComponentResolver is={component}/>
      }
    </Center>
  )
}

export default MainPageCenter;
