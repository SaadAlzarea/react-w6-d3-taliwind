import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default App;
