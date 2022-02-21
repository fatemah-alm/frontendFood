import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientStore {
  ingredients = [];

  constructor() {
    makeAutoObservable(this);
    console.log("heyyy");
  }

  fetchIngredients = async () => {
    try {
      const response = await instance.get("/ingredients");
      this.ingredients = response.data;
    } catch (error) {
      console.log("error message", error);
    }
  };

  createIngredient = async (newIngredient) => {
    try {
      // console.log(newIngredient);
      // const formData = new FormData();
      // for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const response = await instance.post("/ingredients", newIngredient);
      this.ingredients.push(response.data);
      this.fetchIngredients();
    } catch (error) {
      console.log(
        "🚀 ~ file: ingredientStore.js ~ line 16 ~ IngredientStore ~ createIngredient= ~ error",
        error
      );
    }
  };
}

const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredients();

export default ingredientStore;
