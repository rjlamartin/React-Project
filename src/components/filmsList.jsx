import { useState, useEffect } from "react";

function FilmsList(props) {
  let [list, setList] = useState([]);

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films/")
      .then((response) => response.json())
      .then((films) => setList(films))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <ul>
      {list.map((film) => {
        return (
          <li key={film.id}>
            <p>
              {film.title} ---- {film.rt_score}%
            </p>
            <img src={film.image} alt="Movie Poster" />
          </li>
        );
      })}
    </ul>
  );
}

export default FilmsList;
