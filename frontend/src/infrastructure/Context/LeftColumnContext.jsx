import {createContext, useContext, useState} from "react";

const Context = createContext();

export const useLeftColumn = () => useContext(Context);

const LeftColumnContext = ({children}) => {
  const [component, setComponent] = useState(null);
  const [isOpen, setOpen] = useState(true);
  const [width, setWidth] = useState(400);

  return (
    <Context.Provider
      value={{
        isOpen,
        open: () => setOpen(true),
        close: () => setOpen(false),

        width,
        setWidth,

        component,
        setComponent,
      }}
    >
      {children}
    </Context.Provider>
  )
};

export default LeftColumnContext;
