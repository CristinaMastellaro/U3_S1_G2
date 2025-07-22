import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import history from "../data/history.json";
import scifi from "../data/scifi.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AllTheBooks = () => {
  //   state = {
  //     indexGenres: 1,
  //   };

  //   genres = [fantasy, horror, romance, history, scifi];

  //   getBooksHTML(book) {
  //     return (
  //       <Col sm={12} md={4} lg={3} xxl={2} key={book.asin}>
  //         <Card>
  //           <Card.Img variant="top" src={book.img} />
  //           <Card.Body>
  //             <Card.Title>{book.title}</Card.Title>
  //             <Card.Text>{book.price + "€"}</Card.Text>
  //             <Button variant="primary">Buy</Button>
  //           </Card.Body>
  //         </Card>
  //       </Col>
  //     );
  //   }

  //   fantasyBooks = fantasy.map((book) => this.getBooksHTML(book));
  //   historyBooks = history.map((book) => this.getBooksHTML(book));
  //   scifiBooks = scifi.map((book) => this.getBooksHTML(book));
  //   romanceBooks = romance.map((book) => this.getBooksHTML(book));
  //   horrorBooks = horror.map((book) => this.getBooksHTML(book));

  //   getSection(genre) {
  //     return (
  //       <article key={genre}>
  //         <h2 className="my-4 text-center">Libri {genre}</h2>
  //         <Container>
  //           <Row className="g-4">
  //             {genre.map((book) => this.getBooksHTML(book))}
  //           </Row>
  //         </Container>
  //       </article>
  //     );
  //   }

  //   booksByGenre = [
  //     this.fantasyBooks,
  //     this.horrorBooks,
  //     this.romanceBooks,
  //     this.historyBooks,
  //     this.scifiBooks,
  //   ];

  // return (
  //   <section className="mb-5 pb-5">
  //     {this.genres.map((genre) => this.getSection(genre))}
  //   </section>
  // );
  return (
    <section className="mb-5 pb-5">
      <article>
        <h2 className="my-4 text-center">Libri fantasy</h2>
        <Container>
          <Row className="g-4">
            {fantasy.map((book) => {
              return (
                <Col sm={12} md={4} lg={3} xxl={2} key={book.asin}>
                  <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.price + "€"}</Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </article>
      <article>
        <h2 className="my-4 text-center">Libri horror</h2>
        <Container>
          <Row className="g-4">
            {horror.map((book) => {
              return (
                <Col sm={12} md={4} lg={3} xxl={2} key={book.asin}>
                  <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.price + "€"}</Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </article>
      <article>
        <h2 className="my-4 text-center">Libri history</h2>
        <Container>
          <Row className="g-4">
            {history.map((book) => {
              return (
                <Col sm={12} md={4} lg={3} xxl={2} key={book.asin}>
                  <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.price + "€"}</Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </article>
      <article>
        <h2 className="my-4 text-center">Libri scifi</h2>
        <Container>
          <Row className="g-4">
            {scifi.map((book) => {
              return (
                <Col sm={12} md={4} lg={3} xxl={2} key={book.asin}>
                  <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.price + "€"}</Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </article>
      <article>
        <h2 className="my-4 text-center">Libri romance</h2>
        <Container>
          <Row className="g-4">
            {romance.map((book) => {
              return (
                <Col sm={12} md={4} lg={3} xxl={2} key={book.asin}>
                  <Card>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>{book.price + "€"}</Card.Text>
                      <Button variant="primary">Buy</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </article>
    </section>
  );
};

export default AllTheBooks;
