import Navbar from "./component/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import Write from "./Pages/write/Write";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route path="/posts" element={<Homepage />} />
          <Route
            path="/register"
            element={currentUser ? <Homepage /> : <Register />}
          />
          <Route path="/post/:id" element={<Single />} />
          <Route
            path="/login"
            element={currentUser ? <Homepage /> : <Login />}
          />

          <Route path="/write" element={currentUser ? <Write /> : <Login />} />
          <Route
            path="/settings"
            element={currentUser ? <Settings /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{
  /* <Route path="/post/:id">
          <Single />
        </Route> */
}
