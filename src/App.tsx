import "./App.css";
import Welcome from "./components/Welcome";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Welcome />
      <h1>Projects</h1>
      <Projects />
    </div>
  );
}

export default App;
