import {createContext, useContext, useState} from "react";

const Context = createContext();

export const useMainPageLayout = () => useContext(Context);

const MainPageContext = ({children}) => {
  const [leftComponent, setLeftComponent] = useState(null);
  const [leftOpen, setLeftOpen] = useState(false);
  const [leftWidth, setLeftWidth] = useState(400);

  const leftColumn = {
    width: leftWidth,
    setWidth: setLeftWidth,
    component: leftComponent,
    setComponent: setLeftComponent,
    isOpen: leftOpen,
    open: () => setLeftOpen(true),
    close: () => setLeftOpen(false),
  };

  const [rightComponent, setRightComponent] = useState(null);
  const [rightOpen, setRightOpen] = useState(false);
  const [rightWidth, setRightWidth] = useState(400);

  const rightColumn = {
    width: rightWidth,
    setWidth: setRightWidth,
    component: rightComponent,
    setComponent: setRightComponent,
    isOpen: rightOpen,
    open: () => setRightOpen(true),
    close: () => setRightOpen(false),
  };

  return (
    <Context.Provider value={{leftColumn, rightColumn}}>
      {children}
    </Context.Provider>
  )
};

export default MainPageContext;
