import {createContext, useContext, useState} from "react";

const Context = createContext();

export const useCenter = () => useContext(Context);

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
