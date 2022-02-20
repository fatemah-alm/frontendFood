import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import UpdateRoomModal from "./UpdateRoomModal";

const RecipeItem = ({ recipe }) => {
  //   const [isOpen, setIsOpen] = useState(false);

  //   const closeModal = () => setIsOpen(false);

  //   const openModal = () => setIsOpen(true);

  //   const handleDelete = () => {
  //     deleteRoom(room.id);
  // call a function from app to delete a room (pass room.id as a parameter)

  return (
    <div class="col-lg-4 col-sm-6 mb-4">
      <div class="portfolio-item round">
        <a
          class="portfolio-link"
          data-bs-toggle="modal"
          href="#portfolioModal2"
        >
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="image1" src={recipe.image} alt="#" />{" "}
        </a>
        <div class="portfolio-caption">
          <div class="portfolio-caption-heading">
            <p>{recipe.name}</p>
          </div>
          <div class="portfolio-caption-subheading text-muted">
            {recipe.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeItem;
