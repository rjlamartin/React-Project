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
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        //Update the state
        this.setState({
          list: result,
        });
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul>
        {this.state.list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
  }
}

export default FilmsList;

//    render() {
//        return <ul>
//            {this.state.list.map((element, index, array) => {
//                return <li key={element.id}>{element.title}</li>
//            })}
//        </ul>;
//    }
//}
