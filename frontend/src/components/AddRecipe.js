import React from "react";
import { useState } from "react";
import recipetStore from "../stores/recipeStore";
import categoryStore from "../stores/categoryStore";
import {
  Button,
  InputGroup,
  FormControl,
  Modal,
  Form,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import ingredientStore from "../stores/ingredientStore";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

const AddRecipe = () => {
  const navigate = useNavigate();
  const categories = categoryStore.categories;
  const [category, setCategory] = useState("");
  const [progressBar, setProgressBar] = useState(0);

  const ingredients = ingredientStore.ingredients;
  //   console.log("=====", ingredients);
  const [ingredient, setIngredient] = useState({
    name: "",
    type: "",
  });

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
    calories: "",
    cookTime: "",
    prepTime: "",
    createdBy: "",
    category: "",
    ingredient: "",
  });
  //   console.log(ingredients);
  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    setProgressBar(progressBar + 12.5);
  };

  const handleSelect = (key, event) => {
    if (recipe[key] === "" && event) {
      setProgressBar(progressBar + 12.5);
    }
    setRecipe({ ...recipe, [key]: event });
    // console.log(recipe, "Hellooooo");
  };
  const handleCategory = (event) => {
    setCategory(event);
    setProgressBar(progressBar + 12.5);
  };
  const handleIngredient = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });
    setProgressBar(progressBar + 12.5);
  };

  const handleImage = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.files[0] });
    setProgressBar(progressBar + 12.5);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hi", categories, category);
    const foundCategory = categories.find((category1) => {
      return category1.name === category;
    });

    console.log("done==========", foundCategory._id);
    recipe.ing = ["milk", "egg"];
    recipetStore.createRecipe(recipe, foundCategory._id);
    navigate("/recipe-list");
  };

  //   console.log(categories);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroup.Text>Name</InputGroup.Text>
          <FormControl
            placeholder="Your recipe's name"
            name="name"
            value={recipe.name}
            type="text"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Image</InputGroup.Text>
          <FormControl
            name="image"
            type="file"
            onChange={handleImage}
            placeholder="Image"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Description</InputGroup.Text>
          <FormControl
            placeholder="Your recipe description"
            name="description"
            value={recipe.description}
            type="text"
            onChange={handleChange}
          />
        </InputGroup>

        <div className="flex-gap">
          <>
            <DropdownButton
              as={ButtonGroup}
              key="prep-time"
              id="dropdown-variants-Warning"
              variant="warning"
              title={
                recipe.prepTime === "" ? "Prep Time" : `${recipe.prepTime} mins`
              }
              name="prepTime"
              onSelect={(event) => handleSelect("prepTime", event)}
            >
              <Dropdown.Item eventKey={10}>10 min</Dropdown.Item>
              <Dropdown.Item eventKey={15}>15 min</Dropdown.Item>
              <Dropdown.Item eventKey={20}>20 min</Dropdown.Item>
              <Dropdown.Item eventKey={25}>25 min</Dropdown.Item>
              <Dropdown.Item eventKey={30}>30 min</Dropdown.Item>
            </DropdownButton>
          </>
          <br />
          <>
            <DropdownButton
              as={ButtonGroup}
              key="cook-time"
              id="dropdown-variants-Warning"
              variant="warning"
              title={
                recipe.cookTime === "" ? "Cook Time" : `${recipe.cookTime} mins`
              }
              name="cookTime"
              onSelect={(event) => handleSelect("cookTime", event)}
            >
              <Dropdown.Item eventKey={10}>10 min</Dropdown.Item>
              <Dropdown.Item eventKey={15}>15 min</Dropdown.Item>
              <Dropdown.Item eventKey={20}>20 min</Dropdown.Item>
              <Dropdown.Item eventKey={25}>25 min</Dropdown.Item>
              <Dropdown.Item eventKey={30}>30 min</Dropdown.Item>
            </DropdownButton>
          </>
          <br />
          <>
            <DropdownButton
              as={ButtonGroup}
              key="category"
              id="dropdown-variants-Warning"
              variant="warning"
              title={category === "" ? "Category" : `${category}`}
              name="category"
              onSelect={handleCategory}
            >
              {categories.map((category) => (
                <Dropdown.Item key={category._id} eventKey={category.name}>
                  {category.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </>
        </div>

        <InputGroup className="mb-3">
          <InputGroup.Text>Calories</InputGroup.Text>
          <FormControl
            placeholder="Calories Count"
            name="calories"
            value={recipe.calories}
            type="number"
            onChange={handleChange}
          />
        </InputGroup>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Text>Recipe Creator</InputGroup.Text>
          <FormControl
            placeholder="Created by"
            name="createdBy"
            value={recipe.createdBy}
            type="text"
            onChange={handleChange}
          />
        </InputGroup>

        <div
          className="flex-gap"
          style={{ gap: "10px", "margin-bottom": "10px" }}
        >
          <>
            <select
              as={ButtonGroup}
              key="Fruits"
              id="dropdown-variants-Warning"
              variant="warning"
              title={ingredient.type === "" ? "Fruits" : `${ingredient.type}`}
              name="Fruits"
              onChange={handleIngredient}
            >
              <option selected disabled hidden>
                Fruits
              </option>
              {ingredients
                .filter((ingredient) => {
                  //   console.log(ingredient.type);
                  return ingredient.type === "Fruits";
                })
                .map((ingredient1) => (
                  <option key={ingredient1._id} value={ingredient1.name}>
                    {ingredient1.name}
                  </option>
                ))}
            </select>
          </>

          <>
            <select
              as={ButtonGroup}
              key="Dairy"
              id="dropdown-variants-Warning"
              variant="warning"
              title={ingredient.type === "" ? "Dairy" : `${ingredient.type}`}
              name="Dairy"
              onChange={handleIngredient}
            >
              <option selected disabled hidden>
                Dairy
              </option>
              {ingredients
                .filter((ingredient) => {
                  //   console.log(ingredient.type);
                  return ingredient.type === "Dairy";
                })
                .map((ingredient1) => (
                  <option key={ingredient1._id} value={ingredient1.name}>
                    {ingredient1.name}
                  </option>
                ))}
            </select>
          </>

          <>
            <select
              as={ButtonGroup}
              key="Vegetables"
              id="dropdown-variants-Warning"
              variant="warning"
              title={
                ingredient.type === "" ? "Vegetables" : `${ingredient.type}`
              }
              name="Vegetables"
              onChange={handleIngredient}
            >
              <option selected disabled hidden>
                Vegetables
              </option>
              {ingredients
                .filter((ingredient) => {
                  //   console.log(ingredient.type);
                  return ingredient.type === "Vegetables";
                })
                .map((ingredient1) => (
                  <option key={ingredient1._id} value={ingredient1.name}>
                    {ingredient1.name}
                  </option>
                ))}
            </select>
          </>
          <>
            <select
              as={ButtonGroup}
              key="protien"
              id="dropdown-variants-Warning"
              variant="warning"
              title={ingredient.type === "" ? "protien" : `${ingredient.type}`}
              name="protien"
              onChange={handleIngredient}
            >
              <option selected disabled hidden>
                protien
              </option>
              {ingredients
                .filter((ingredient) => {
                  //   console.log(ingredient.type);
                  return ingredient.type === "protien";
                })
                .map((ingredient1) => (
                  <option key={ingredient1._id} value={ingredient1.name}>
                    {ingredient1.name}
                  </option>
                ))}
            </select>
          </>

          <>
            <select
              as={ButtonGroup}
              key="Grains"
              id="dropdown-variants-Warning"
              variant="warning"
              title={ingredient.type === "" ? "Grains" : `${ingredient.type}`}
              name="Grains"
              onChange={handleIngredient}
            >
              <option selected disabled hidden>
                Grains
              </option>
              {ingredients
                .filter((ingredient) => {
                  //   console.log(ingredient.type);
                  return ingredient.type === "Grains";
                })
                .map((ingredient1) => (
                  <option key={ingredient1._id} value={ingredient1.name}>
                    {ingredient1.name}
                  </option>
                ))}
            </select>
          </>
        </div>

        <ProgressBar
          animated
          now={progressBar}
          label={progressBar >= 100 ? "Yumm!" : `${progressBar}%`}
        />
        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default observer(AddRecipe);
