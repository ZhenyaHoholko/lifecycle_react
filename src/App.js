import LifecycleComponent from "..//src/component/LifecycleComponent";
import "./App.css";
import FunctionComponent from "./component/FunctionComponent";

function App() {
  return (
    <div className="main">
      <h1>Классовые и функциональные компоненты</h1>
      <span className="box">
        <LifecycleComponent />
      </span>
      <br />
      <span className="box">
        <FunctionComponent />
      </span>
    </div>
  );
}

export default App;
