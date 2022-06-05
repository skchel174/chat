import Layout from "layouts/Main/Layout";
import {createContext, useState, useContext} from "react";

const components = {};

const Context = createContext();

export const useLayoutContext = () => {
  return useContext(Context);
}

export const ComponentResolver = ({component}) => {
  const Content = components[component];

  return component !== null
    ? <Content/>
    : null;
};

export const LayoutContext = () => {
  const [leftComponent, setLeftComponent] = useState(null);
  const [isLeftOpen, setLeftOpen] = useState(false);

  const leftColumn = {
    isOpen: isLeftOpen,
    component: leftComponent,
    open: () => setLeftOpen(true),
    close: () => setLeftOpen(false),
    setContent: (component) => setLeftComponent(component),
  };

  const [middleComponent, setMiddleComponent] = useState(null);
  const [isMiddleOpen, setMiddleOpen] = useState(false);

  const middleColumn = {
    isOpen: isMiddleOpen,
    component: middleComponent,
    open: () => setMiddleOpen(true),
    close: () => setMiddleOpen(false),
    setContent: (component) => setMiddleComponent(component),
  };

  const [rightComponent, setRightComponent] = useState(null);
  const [isRightOpen, setRightOpen] = useState(false);

  const rightColumn = {
    isOpen: isRightOpen,
    component: rightComponent,
    open: () => setRightOpen(true),
    close: () => setRightOpen(false),
    setContent: (component) => setRightComponent(component),
  };

  return (
    <Context.Provider value={{leftColumn, middleColumn, rightColumn}}>
      <Layout/>
    </Context.Provider>
  );
};
