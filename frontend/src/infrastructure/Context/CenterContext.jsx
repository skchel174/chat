import {createContext, useContext, useState} from "react";

const Context = createContext();

export const useCenterContext = () => useContext(Context);

const CenterContext = ({children}) => {
  const [component, setComponent] = useState(null);

  return (
    <Context.Provider
      value={{
        component,
        setComponent,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CenterContext;
