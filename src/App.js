import "./App.css";
import Header from "./components/Header/Header";
import Terminal from "./components/Terminal/Terminal";

function App() {
  

  return (
    <div className="App">
      <div className="grid">
        <div className="terminalwrap">
          <Header />
          <Terminal />
        </div>
      </div>
    </div>
  );
}

export default App;
