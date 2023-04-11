import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <BrowserRouter>
        <Route exact path="/"  />
        <Route path="/about" component={About} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
