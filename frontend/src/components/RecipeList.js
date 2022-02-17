import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import recipeStore from "../stores/recipeStore";
import Recipes from "./Recipes";

const RecipeList = () => {
  const recipeList = recipeStore.recipies.map((recipe) => {
    return <Recipes recipe={recipe} key={recipe.id} />;
  });
  useEffect(() => {
    recipeStore.fetchRecipies();
  }, []);
  return <div>{recipeList}</div>;
};

export default observer(RecipeList);
