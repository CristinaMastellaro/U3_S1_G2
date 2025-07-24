import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import fantasy from "./data/fantasy.json";
import romance from "./data/romance.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import scifi from "./data/scifi.json";
// import BookList from "./components/BookList.jsx";
import SearchBook from "./components/SearchBook.jsx";
import ChooseGenre from "./components/ChooseGenre.jsx";
// import AllTheBooks from "./components/AllTheBooks.jsx";

function App() {
  // const totalBooks = [];
  // const addBooks = (array) => {

  // }

  return (
    <>
      <MyNav />
      <Welcome />
      {/* <SearchBook array={fantasy, romance,}/> */}
      <ChooseGenre />
      {/* <AllTheBooks /> */}
      {/* <BookList list={fantasy} /> */}
      <MyFooter />
    </>
  );
}

export default App;
