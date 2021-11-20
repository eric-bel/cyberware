import "./App.css";
import Header from "./components/Header/Header";
import Terminal from "./components/Terminal/Terminal";

function App() {
  return (
    <div className="App">
      <div className="grid">
        <Header />
        {/* <div className="terminal">Терминал</div> */}
        <Terminal />
      </div>
    </div>
  );
}

export default App;
