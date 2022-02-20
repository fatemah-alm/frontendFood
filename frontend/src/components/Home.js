import React from "react";
import CategoryList from "./CategoryList";

const Home = () => {
  return (
    <>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Kitchen!</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To serve You
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase"
            href="/recipeList"
          >
            view all recipies
          </a>
        </div>
      </header>
      <CategoryList />
    </>
  );
};

export default Home;
