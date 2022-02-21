import React from "react";
import CategoryList from "./CategoryList";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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
            href="/recipe-list"
          >
            view all recipies
          </a>
        </div>
      </header>

      <div>
        <CategoryList />
      </div>
      <br />
      <div className="button">
        <Link to="/all-categories">
          <Button>Show more</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
