import Center from "components/Layout/Center";
import {useRightColumn} from "infrastructure/Context/RightColumnContext";
import {useCenterContext} from "infrastructure/Context/CenterContext";
import ComponentResolver from "infrastructure/Context/ComponentResolver";
import PropTypes from "prop-types";
import {useEffect} from "react";

const MainPageMiddle = ({rightOffset}) => {

  const rightColumn = useRightColumn();

  const {component, setComponent} = useCenterContext();

  useEffect(() => setComponent("Dialog"), []);

  return (
    <Center
      isRightOffset={rightColumn.isOpen}
      rightOffset={rightOffset}
    >
      {
        component && <ComponentResolver is={component}/>
      }
    </Center>
  )
}

MainPageMiddle.propTypes = {
  rightOffset: PropTypes.number.isRequired,
};

export default MainPageMiddle;
