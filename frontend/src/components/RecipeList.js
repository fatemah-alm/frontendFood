import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useParams } from "react-router-dom";
import recipeStore from "../stores/recipeStore";
import Recipes from "./Recipes";

const RecipeList = () => {
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
    <section class="page-section bg-light" id="portfolio">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Portfolio</h2>
          <h3 class="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <div class="row">{recipeList}</div>
      </div>
    </section>
  );
};

export default observer(RecipeList);
