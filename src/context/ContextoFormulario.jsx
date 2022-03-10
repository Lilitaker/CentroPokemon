import { createContext, useState } from "react";

// Aqui debemos crear nuestro contexto y nuestro provider.

//Contexto
export const ContextoFormulario = createContext();

//Provider
const ContextoFormularioProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <ContextoFormulario.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </ContextoFormulario.Provider>
  );
};

export default ContextoFormularioProvider;
