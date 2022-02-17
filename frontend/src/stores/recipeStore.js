import { makeAutoObservable, observable, action } from "mobx";
import axios from "axios";

class RecipeStore {
  recipies = [];

  constructor() {
    makeAutoObservable(this, {
      fetchRecipies: action,
    });
  }

  fetchRecipies = async () => {
    try {
      const recipeResponse = await instance.get("/recipies");
      this.recipies = this.recipies.push(recipeResponse.data);
    } catch (error) {
      console.log("error message", error);
    }
  };
}

const recipeStore = new RecipeStore();

export default recipeStore;
