import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  constructor() {
    makeAutoObservable(this);
  }

  categories = [];

  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.log("CategoryStore -> fetchCategories -> error", error);
    }
  };
}

const categoryStore = new CategoryStore();
export default categoryStore;
