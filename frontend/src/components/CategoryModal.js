import React from "react";
import { useState } from "react";
import categorytStore from "../stores/categorytStore";

const CategoryModal = () => {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    image: "",
    description: "",
  });

  return <div>CategoryModal</div>;
};

export default CategoryModal;
