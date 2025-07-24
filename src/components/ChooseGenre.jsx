import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import history from "../data/history.json";
import scifi from "../data/scifi.json";
import romance from "../data/romance.json";
import BookList from "./BookList";
import { Component } from "react";
import SearchBook from "./SearchBook";

class ChooseGenre extends Component {
  state = {
    genre: "",
    arrayBooks: [],
  };

  render() {
    return (
      <>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item
            href="#"
            onClick={() => {
              this.setState({ genre: "horror", arrayBooks: horror });
            }}
          >
            Horror
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={() => {
              this.setState({ genre: "romance", arrayBooks: romance });
            }}
          >
            Romance
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={() => {
              this.setState({ genre: "fantasy", arrayBooks: fantasy });
            }}
          >
            Fantasy
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={() => {
              this.setState({ genre: "history", arrayBooks: history });
            }}
          >
            History
          </Dropdown.Item>
          <Dropdown.Item
            href="#"
            onClick={() => {
              this.setState({ genre: "scifi", arrayBooks: scifi });
            }}
          >
            Scifi
          </Dropdown.Item>
        </DropdownButton>
        <SearchBook array={this.state.arrayBooks} />
        <BookList list={this.state.arrayBooks || []} />
      </>
    );
  }
}

export default ChooseGenre;
