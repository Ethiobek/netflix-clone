import Row from "./Row";
import requests from "./request";
import "./App.css";
import Banner from "./Banner";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX ORGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
