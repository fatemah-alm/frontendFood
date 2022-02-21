import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import ingredientStore from "../stores/ingredientStore";
import Ingredients from "./Ingredients";
import IngredientModal from "./IngredientModal";
import { Button } from "react-bootstrap";

const IngredientList = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const ingredientList = ingredientStore.ingredients.map((ingredient) => {
    // console.log(ingredient);
    return <Ingredients ingredient={ingredient} key={ingredient._id} />;
  });

  console.log(IngredientList);
  //   useEffect(() => {
  //     IngredientStore.fetchRecipies();
  //   }, []);
  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase"> ingredients</h2>
            <h3 className="section-subheading text-muted">
              best picks for you{" "}
            </h3>
          </div>
          <div className="row">{ingredientList}</div>
          <Button variant="outline-dark" onClick={handleShow}>
            Add Ingredient
          </Button>
        </div>
      </section>

      <IngredientModal
        handleClose={handleClose}
        setShow={setShow}
        show={show}
      />
    </>
  );
};

export default observer(IngredientList);
