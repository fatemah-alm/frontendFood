import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import ingredientStore from "../stores/ingredientStore";
// import Ingredients from "./Ingredients";
// import IngredientModal from "./IngredientModal";
import { Button } from "react-bootstrap";

const IngredientList = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const name = useParams().name;
  console.log(name);

  const ingredientList = ingredientStore.ingredients
    // .filter((ingredient) => {
    // //   console.log(ingredient.category);
    //  {
    //     return name ? ingredient.category.name === name : true;
    //   }
    // })
    .map((ingredient) => {
      console.log(ingredient);
      //   return <ingredients ingredient={ingredient} key={ingredient.id} />;
    });

  console.log(IngredientList);
  //   useEffect(() => {
  //     IngredientStore.fetchRecipies();
  //   }, []);
  return (
    <>
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">{name} recipies</h2>
            <h3 class="section-subheading text-muted">finest {name} food </h3>
          </div>
          <div class="row">{ingredientList}</div>
          <Button variant="outline-dark" onClick={handleShow}>
            Add Ingredient
          </Button>
        </div>
      </section>

      {/* <IngredientModal handleClose={handleClose} setShow={setShow} show={show} /> */}
    </>
  );
};

export default observer(IngredientList);
