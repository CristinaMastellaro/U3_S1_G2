import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = (prop) => {
  return (
    <article>
      <h2 className="my-4 text-center">Libri</h2>
      <Container>
        <Row className="g-4">
          {prop.list.map((singleBook, i) => {
            return <SingleBook key={i} book={singleBook} />;
          })}
        </Row>
      </Container>
    </article>
  );
};

export default BookList;
