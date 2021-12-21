import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Terminal from "./components/Terminal/Terminal";
import About from "./components/Terminal/СonditionalRendering/About/About";

function App() {
  return (
    <>
      <div className="App">
        <div className="grid">
          <div className="terminalwrap">
            <Header />
            <Terminal />
          </div>
        </div>
      </div>
      {/* <BrowserRouter> */}
        <Router>
          <Routes>
            {" "}
            <Route path="about" component={<About />} />
          </Routes>
        </Router>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
