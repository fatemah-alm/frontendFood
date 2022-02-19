import axios from "axios";
import { makeAutoObservable, observable, action } from "mobx";
import instance from "./instance";

class RecipeStore {
  recipies = [];

  constructor() {
    makeAutoObservable(this);
    console.log("hi");
  }

  fetchRecipies = async () => {
    try {
      const recipeResponse = await axios.get(
        "http://localhost:8088/api/recipies"
      );
      this.recipies = recipeResponse.data;
    } catch (error) {
      console.log("error message", error);
    }
  };

  //   fetchSomeRecipies = async (categoryId) => {
  //     try {
  //       const recipeResponse = await axios.get(
  //         `http://localhost:8088/api/categories/${categoryId}/recipies`
  //       );

  //       this.recipies = recipeResponse.data;
  //     } catch (error) {
  //       console.log("error message", error);
  //     }
  //   };
}

const recipeStore = new RecipeStore();
recipeStore.fetchRecipies();
export default recipeStore;
