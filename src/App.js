import "./App.css";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Footer from "./containers/Footer";

function App() {
  return (
    <div id="body" className="grey darken-3 text-light">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
