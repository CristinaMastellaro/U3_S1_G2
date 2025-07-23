import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import fantasy from "./data/fantasy.json";
import BookList from "./components/BookList.jsx";
// import AllTheBooks from "./components/AllTheBooks.jsx";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList list={fantasy} />
      <MyFooter />
    </>
  );
}

export default App;
