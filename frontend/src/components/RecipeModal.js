import React from "react";
import { useState } from "react";
import recipetStore from "../stores/recipeStore";
import categoryStore from "../stores/categoryStore";
import {
  Button,
  InputGroup,
  FormControl,
  Modal,
  DropdownButton,
  ButtonGroup,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";

const RecipeModal = ({ setShow, handleClose, show }) => {
  const categories = categoryStore.categories;
  const [category, setCategory] = useState("");

  const [progressBar, setProgressBar] = useState(0);

  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
    calories: "",
    cookTime: "",
    prepTime: "",
    createdBy: "",
    category: "",
  });

  const handleChange = (event) => {
    if (recipe[event.target.name] === "" && event.target.value !== "") {
      setProgressBar(progressBar + 12.5);
    }
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const handleSelect = (key, event) => {
    if (recipe[key] === "" && event) {
      setProgressBar(progressBar + 12.5);
    }
    setRecipe({ ...recipe, [key]: event });
    console.log(recipe, "Hellooooo");
  };
  const handleCategory = (event) => {
    if (recipe["category"] === "" && event) {
      setProgressBar(progressBar + 12.5);
    }
    setCategory(event);
  };

  const handleImage = (event) => {
    if (recipe[event.target.name] === "" && event.target.files[0]) {
      setProgressBar(progressBar + 12.5);
    }
    setRecipe({ ...recipe, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const foundCategory = categories.find((category1) => {
      return category1.name === category;
    });

    recipetStore.createRecipe(recipe, foundCategory._id);
    handleClose();
  };

  console.log(categories);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Recipe's name"
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
                placeholder="Recipe's description"
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
                    recipe.prepTime === ""
                      ? "Prep Time"
                      : `${recipe.prepTime} mins`
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
                    recipe.cookTime === ""
                      ? "Cook Time"
                      : `${recipe.cookTime} mins`
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
                    <Dropdown.Item eventKey={category.name}>
                      {category.name}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </>
            </div>

            <InputGroup
              className="mb-3"
              className="mod-wid"
              style={{ padding: "5px" }}
            >
              <InputGroup.Text>Calories</InputGroup.Text>
              <FormControl
                placeholder="Calories Count"
                name="calories"
                value={recipe.calories}
                type="number"
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup
              className="mb-3"
              className="mod-wid"
              style={{ padding: "5px" }}
            >
              <InputGroup.Text>Creator</InputGroup.Text>
              <FormControl
                placeholder="Created by"
                name="createdBy"
                value={recipe.createdBy}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <div style={{ padding: "5px" }}>
              <ProgressBar
                animated
                now={progressBar}
                label={progressBar >= 100 ? "Yumm!" : `${progressBar}%`}
              />
            </div>

            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default RecipeModal;
