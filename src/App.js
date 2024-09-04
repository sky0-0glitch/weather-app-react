import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New york" />
        <footer>
          this page is coded by sahar omer open sourced on{" "}
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
  );
}

export default App;
