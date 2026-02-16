import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { user, theme } = useContext(GlobalContext);

  return (
    <div className="navbar">
      <h2>React Context Lab</h2>
      <p>User: {user}</p>
      <span>Theme: {theme}</span>
    </div>
  );
};

export default Navbar;
