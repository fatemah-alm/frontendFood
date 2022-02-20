import { makeAutoObservable } from "mobx";
import instance from "./instance";

class IngredientStore {
  Ingredients = [];

  constructor() {
    makeAutoObservable(this);
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
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      const response = await instance.post("/ingredients", formData);
      this.ingredients.push(response.data);
      console.log(response.data, "data");
      console.log(response.data.payload, "payload");
    } catch (error) {
      console.log(
        "🚀 ~ file: ingredientStore.js ~ line 16 ~ IngredientStore ~ createIngredient= ~ error",
        error
      );
    }
  };
}

const ingredientStore = new IngredientStore();
IngredientStore.fetchIngredients();

export default ingredientStore;
