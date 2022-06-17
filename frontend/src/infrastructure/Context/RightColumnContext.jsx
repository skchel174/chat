import {createContext, useContext, useState} from "react";

const Context = createContext();

export const useRightColumn = () => useContext(Context);

const RightColumnContext = ({children}) => {
  const [component, setComponent] = useState(null);
  const [isOpen, setOpen] = useState(false);

  return (
    <Context.Provider
      value={{
        isOpen,
        open: () => setOpen(true),
        close: () => setOpen(false),
        component,
        setComponent,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default RightColumnContext;
