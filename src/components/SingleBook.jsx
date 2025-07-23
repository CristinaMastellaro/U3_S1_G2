import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import "../css/SingleBook.css"; // Assuming you have a CSS file for styling

class SingleBook extends Component {
  state = {
    selected: true,
  };

  changeStyle = (e) => {
    if (this.state.selected) {
      e.target.parentElement.classList.add("selected");
    } else {
      e.target.parentElement.classList.remove("selected");
    }
  };

  render() {
    return (
      <Col sm={12} md={4} lg={3} xxl={2} key={this.props.book.asin}>
        <Card id="card">
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={(e) => {
              console.log("this.state.selected", this.state.selected);
              this.setState({ selected: !this.state.selected });
              console.log("this.state.selected", this.state.selected);
              if (this.state.selected) {
                e.target.parentElement.classList.add("selected");
              } else {
                e.target.parentElement.classList.remove("selected");
              }
            }}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>{this.props.book.price + "€"}</Card.Text>
            <Button variant="primary">Buy</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
