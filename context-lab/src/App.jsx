import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <div className="container">
        <Counter />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default App;
