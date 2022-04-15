import axios from "./axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Row;
