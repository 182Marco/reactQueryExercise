import "./App.css";
import { FirstComp, SecondComp } from "./components";
import "./style.scss";

function App() {
  return (
    <div className="app">
      <div className="main-box">
        <FirstComp />
        <SecondComp />
      </div>
    </div>
  );
}

export default App;
