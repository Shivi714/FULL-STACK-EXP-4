import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../features/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>Redux Counter</h2>
      <h1>{count}</h1>

      <div className="btn-group">
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
