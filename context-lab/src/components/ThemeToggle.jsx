import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(GlobalContext);

  return (
    <div className="card">
      <h3>Theme Controller</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;
