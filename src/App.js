import FirstPage from "./Home/First-page/FirstPage";
import "./App.css";
import About from "./Home/About/About";
import Skills from "./Home/Skills/Skills";
import Contact from "./Home/Contact/Contact";

function App() {
  return (
    <>
      <div className="App">
        <FirstPage />
          <About />
          <Skills />
          <Contact />

      </div>
    </>
  );
}

export default App;
