import SearchBook from "./SearchBook";
import SingleBook from "./SingleBook";
import { Container, Row } from "react-bootstrap";

const BookList = (props) => {
  return (
    // console.log("")
    <>
      <SearchBook array={props.list} />
      <article>
        <h2 className="my-4 text-center">Libri</h2>
        <Container classList="mb-5 pb-5">
          <Row className="g-4">
            {props.list.map((singleBook, i) => {
              return <SingleBook key={i} book={singleBook} />;
            })}
          </Row>
        </Container>
      </article>
    </>
  );
};

export default BookList;
