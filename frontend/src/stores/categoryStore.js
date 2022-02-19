import { makeAutoObservable } from "mobx";
import instance from "./instance";

class CategoryStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategories = async () => {
    try {
      const response = await instance.get("/categories");
      this.categories = response.data;
    } catch (error) {
      console.log("error message", error);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();

export default categoryStore;
