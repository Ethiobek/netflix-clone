import "./App.css";
import Row from "./Row";
import requests from "./request";

function App() {
  return (
    <div className="App">
      <Row title="NETFLIX ORGINAL" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trendig Movies" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
