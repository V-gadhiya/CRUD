import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Upadate from "./components/Upadate";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Upadate />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
