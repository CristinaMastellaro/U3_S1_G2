import { Form, Row, Col, Button } from "react-bootstrap";
// import fantasy from "../data/fantasy.json";
import BookList from "./BookList";
import { Component } from "react";

class SearchBook extends Component {
  state = {
    filter: "",
  };

  //   filter = (e) => {
  //     e.preventDefault();
  //     console.log("this.state.filter", this.state.filter);
  //     const filteredBooks = fantasy.filter((book) =>
  //       book.title.toLowerCase().includes(this.state.filter.toLowerCase())
  //     );
  //     console.log("filteredBooks", filteredBooks);
  //     console.log(
  //       " <BookList list={filteredBooks} />",
  //       <BookList list={filteredBooks} />
  //     );
  //     return (
  //       <div>
  //         <h2 className="text-center">Filtered books</h2>
  //         <BookList list={filteredBooks} />
  //       </div>
  //     );
  //   };

  render() {
    return (
      <Form className="my-5">
        <Row className="justify-content-center">
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={this.state.filter}
              onChange={(e) => {
                this.setState({ filter: e.target.value });
              }}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <BookList
              list={this.props.array.filter((book) =>
                book.title
                  .toLowerCase()
                  .includes(this.state.filter.toLowerCase())
              )}
            />
          </Col>
        </Row>
      </Form>
    );
  }
}

export default SearchBook;
