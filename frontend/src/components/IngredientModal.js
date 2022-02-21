import React from "react";
import { useState } from "react";
import ingredientStore from "../stores/ingredientStore";
import {
  Button,
  InputGroup,
  FormControl,
  Modal,
  Form,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const IngredientModal = ({ setShow, handleClose, show }) => {
  const [ingredient, setIngredient] = useState({
    name: "",
    type: "",
  });

  const handleChange = (event) => {
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });

    console.log(ingredient, "Hellooooo");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ingredientStore.createIngredient(ingredient);
    handleClose();
  };

  return (
    // ADD PROGRESS BARS
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your ingredient's name"
                name="name"
                value={ingredient.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select name="type" onChange={handleChange}>
                <option selected disabled hidden>
                  type
                </option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Dairy">Dairy</option>
                <option value="Protein">Protein</option>
                <option value="Grains">Grains</option>
              </Form.Select>
            </Form.Group>

            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default IngredientModal;
