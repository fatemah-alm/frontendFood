import logo from "./logo.svg";
import "./style/my.css";
import "./App.css";

import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipeList" element={<RecipeList />} />
        <Route path="/category/:name" element={<RecipeList />} />
      </Routes>
    </div>
  );
}

export default App;
