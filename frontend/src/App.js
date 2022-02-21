import logo from "./logo.svg";
import "./style/my.css";
import "./App.css";
// import "./style/another.css";

import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipeList from "./components/RecipeList";
import IngredientList from "./components/IngredientList";
import AddRecipe from "./components/AddRecipe";
import CategoryList from "./components/CategoryList";
import AllCategories from "./components/AllCategories";

function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <div style={{ flex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-list" element={<RecipeList />} />
          <Route path="/ingredient-list" element={<IngredientList />} />
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/all-categories" element={<AllCategories />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/category/:name" element={<RecipeList />} />
        </Routes>
      </div>
      <footer class="py-3 bg-dark " style={{ flex: 0 }}>
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
