import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Counter = () => {
  const { count, increment, decrement } = useContext(GlobalContext);

  return (
    <div className="card">
      <h3>Global Counter</h3>
      <h1>{count}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
