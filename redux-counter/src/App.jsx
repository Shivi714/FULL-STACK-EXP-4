import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="title">Redux State Management</h1>
      <p className="subtitle">Counter Application using Redux Toolkit</p>
      <Counter />
    </div>
  );
}

export default App;
