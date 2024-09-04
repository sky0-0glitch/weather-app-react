import "./App.css";
import Weather from "./Weather";
import Videobg from "./Background.mp4";
function App() {
  return (
    <div className="App">
      <video src={Videobg} autoPlay loop muted />
      <div className="Application">
        <div className="container ">
          <Weather defaultCity="New york" />
          <footer>
            this page is coded by
            <a
              href="www.linkedin.com/in/saharomer"
              target="_blank"
              rel="noreferrer"
            >
              Sahar Omer
            </a>{" "}
            open sourced on{" "}
            <a
              href="https://github.com/sky0-0glitch/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              gethub
            </a>{" "}
            hosted on{" "}
            <a
              href="https://spiffy-bavarois-fa6c62.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
