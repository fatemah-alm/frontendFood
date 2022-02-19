import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import recipeStore from "../stores/recipeStore";
import Recipes from "./Recipes";
import RecipeModal from "./RecipeModal";
import { Button } from "react-bootstrap";

const RecipeList = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const name = useParams().name;
  console.log(name);
  const recipeList = recipeStore.recipies
    .filter((recipe) => {
      console.log(recipe);
      if (name) return recipe.category.name.includes(name);
      else return true;
    })
    .map((recipe) => {
      return <Recipes recipe={recipe} key={recipe.id} />;
    });
  //   useEffect(() => {
  //     recipeStore.fetchRecipies();
  //   }, []);
  return (
    <>
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">{name} recipies</h2>
            <h3 class="section-subheading text-muted">finest {name} food </h3>
          </div>
          <div class="row">{recipeList}</div>
          <Button variant="outline-dark" onClick={handleShow}>
            Add Recipe
          </Button>
        </div>
      </section>

      <RecipeModal handleClose={handleClose} setShow={setShow} show={show} />
    </>
  );
};

export default observer(RecipeList);
