import "./App.css";
import Terminal from "./components/Terminal/Terminal";

function App() {
  return (
    <>
      <div className="App">
        <div className="grid">
          <div className="terminalwrap">
            <Terminal />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
