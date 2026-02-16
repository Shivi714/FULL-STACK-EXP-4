import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState("Shivali");
  const [count, setCount] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        user,
        count,
        toggleTheme,
        increment,
        decrement,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
