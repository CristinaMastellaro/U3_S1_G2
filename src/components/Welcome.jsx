import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <section>
      <div className="bg-info py-5 mt-2">
        <h1 className="text-center mb-3">Libreria da Epicode</h1>
        <h4 className="text-center text-light-emphasis">
          Dove anche il sogno più fantasioso prende vita in un libro
        </h4>
      </div>
      <Alert
        key="info"
        variant="info"
        className="w-25 mx-auto my-3 text-center"
      >
        Welcome to our page!
      </Alert>
    </section>
  );
}

export default Welcome;
