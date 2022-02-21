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
      console.log(recipe.category);
      if (recipe.category) {
        return name ? recipe.category.name === name : true;
      }
    })

    // .filter((recipe) => {
    //   return recipe.category.name === name;
    // })

    .map((recipe) => {
      console.log(recipe);
      return <Recipes recipe={recipe} key={recipe.id} />;
    });

  console.log(recipeList);
  //   useEffect(() => {
  //     recipeStore.fetchRecipies();
  //   }, []);
  return (
    <>
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase"> recipies</h2>
            <h3 class="section-subheading text-muted">finest food </h3>
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
