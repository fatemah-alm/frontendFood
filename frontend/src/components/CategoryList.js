import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";
import CategoryCard from "./CategoryCard";
import CategoryModal from "./CategoryModal";

//import { collectStoredAnnotations } from "mobx/dist/internal";
=======
import { Link } from "react-router-dom";


const CategoryList = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const categoryList = categoryStore.categories
    .slice(0, 2)
    .map((category) => <CategoryCard key={category._id} category={category} />);
  // .filter((category) =>
  //   category.name.toLowerCase().includes(query.toLowerCase())
  // )

  return (
    <>
      <h1>categories</h1>
      <Button className="bk-color" variant="outline-dark" onClick={handleShow}>
        Add Category
      </Button>
      <div className="categories">{categoryList}</div>
      <div>
        <Link to="/all-categories">... show all</Link>
      </div>
      <CategoryModal handleClose={handleClose} setShow={setShow} show={show} />
    </>
  );
};

export default observer(CategoryList);
