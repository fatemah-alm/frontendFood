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

  createRecipe = async (newRecipe, categoryId) => {
    try {
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);

      const response = await instance.post(
        `categories/${categoryId}/recipies`,
        // { name: "hi" }
        formData
      );

      // console.log(this.categories[0], "hello");

      this.fetchRecipies();

      //   this.recipies.push(response.data);
      //   console.log(response.data, "data");
      //   console.log(response.data.payload, "payload");
    } catch (error) {
      console.log(
        "🚀 ~ file: RecipeStore.js ~ line 16 ~ ProductStore ~ createProduct= ~ error",
        error
      );
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
