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

  createCategory = async (newCategory) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const response = await instance.post("/categories", formData);
      // console.log(this.categories[0], "hello");
      this.categories.push(response.data);
      console.log(response.data, "data");
      console.log(response.data.payload, "payload");
    } catch (error) {
      console.log(
        "🚀 ~ file: categoryStore.js ~ line 16 ~ ProductStore ~ createProduct= ~ error",
        error
      );
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategories();

export default categoryStore;
