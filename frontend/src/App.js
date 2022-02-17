import logo from "./logo.svg";
import "./App.css";
import "./style/my.css";

import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Categories />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Service />} />
      </Routes> */}
    </div>
  );
}

export default App;
