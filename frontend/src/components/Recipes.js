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
    <div className="group">
      <div style={{ animationDelay: "0.1" }} className="chatlist__item">
        <div className="avatar">
          <div className="avatar-img">
            <img src={recipe.image} alt="#" />
          </div>
        </div>
        <div className="userMeta">
          <p>{recipe.name}</p>
          <span className="activeTime">{recipe.description}</span>
        </div>
      </div>
    </div>
  );
};
export default RecipeItem;
