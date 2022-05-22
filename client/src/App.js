import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login.js";
import Buttons from "./Components/Buttons";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              <Buttons />
              <div className="page">
                <Login />
              </div>
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="main">
              <Buttons />

              <div className="page">
                <Signup />
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
