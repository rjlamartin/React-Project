//import { render } from "@testing-library/react";
import { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    //HEADS UP WARNING
    //this is the ONLY time when we directly assign a value to a property on the state object
    this.state = {
      list: [],
    };
  }

  getFilms() {
    //Consuming the promise
    //1) .then()
    //2)  async/await
    fetch("https://studioghibliapi-d6fc8.web.app/films/")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        // Update the state
        this.setState({
          list: result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul>
        {this.state.list.map((film) => {
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
      //ul
      //{this.state.list.map((element, index, array) => {
      //return <li>{element.title}</li>
      //})}
    );
  }
}

export default FilmsList;
