import { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

const [tema, setTema] = useState("claro");

  return (
    <ThemeContext.Provider
      value={{
        tema,
        setTema
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;