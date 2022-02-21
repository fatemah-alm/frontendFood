import React from "react";
import { useState } from "react";
import categoryStore from "../stores/categoryStore";
import {
  Button,
  InputGroup,
  FormControl,
  Modal,
  ButtonGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const CategoryModal = ({ setShow, handleClose, show }) => {
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
    console.log(category, "Hellooooo");
  };

  const handleImage = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();

    // if (oldProduct) productStore.updateProduct(product, oldProduct._id);
    categoryStore.createCategory(category);
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
                placeholder="Your category's name"
                name="name"
                value={category.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                // value={category.image}
                type="file"
                onChange={handleImage}
                placeholder="Image"
              />
            </InputGroup>
            <Button variant="outline-dark" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CategoryModal;
