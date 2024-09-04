import "./App.css";
import Weather from "./Weather";
import Video1 from "./Background.mp4";
import Video2 from "./background.ogv";
import Video3 from "./background.h264";
import Video4 from "./background.webm";
import poster from "./poster.png";
function App() {
  return (
    <div className="App">
      <video autoPlay loop muted playsInline poster={poster}>
        <source src={Video1} type="video/mp4" />
        <source src={Video2} type="video/ogv" />
        <source src={Video3} type="video/h264" />
        <source src={Video4} type="video/webm" />
      </video>
      <div className="Application">
        <div className="container ">
          <Weather defaultCity="New york" />
          <footer>
            this page is coded by
            <a
              href="https://www.linkedin.com/in/saharomer/"
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
