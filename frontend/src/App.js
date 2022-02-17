import logo from "./logo.svg";
import "./App.css";
import "./style/my.css";

import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Service />} />
        <Route path="/recipeList" element={<RecipeList />} />
      </Routes>
    </div>
  );
}

export default App;
