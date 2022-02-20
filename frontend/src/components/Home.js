import React from "react";
import CategoryList from "./CategoryList";

const Home = () => {
  return (
    <>
      <header class="masthead">
        <div class="container">
          <div class="masthead-subheading">Welcome To Our Kitchen!</div>
          <div class="masthead-heading text-uppercase">
            It's Nice To serve You
          </div>
          <a class="btn btn-primary btn-xl text-uppercase" href="/recipeList">
            view all recipies
          </a>
        </div>
      </header>
      <CategoryList />
    </>
  );
};

export default Home;
