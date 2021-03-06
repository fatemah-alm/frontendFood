import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";
import CategoryCard from "./CategoryCard";
import CategoryModal from "./CategoryModal";

const CategoryList = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const categoryList = categoryStore.categories.map((category) => (
    <CategoryCard key={category._id} category={category} />
  ));
  // .filter((category) =>
  //   category.name.toLowerCase().includes(query.toLowerCase())
  // )

  return (
    <>
      <h1>categories</h1>
      <Button variant="outline-dark" onClick={handleShow}>
        Add Category
      </Button>
      <div className="categories1">{categoryList}</div>

      <CategoryModal handleClose={handleClose} setShow={setShow} show={show} />
    </>
  );
};

export default observer(CategoryList);
