import React from "react";
import categoryStore from "../stores/categoryStore";
import { observer } from "mobx-react";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const categoryList = categoryStore.categories
    // .filter((category) =>
    //   category.name.toLowerCase().includes(query.toLowerCase())
    // )
    .map((category) => <CategoryCard key={category._id} category={category} />);

  return (
    <div>{categoryList}</div>
    // <section class="page-section" id="services">
    //   <div class="container">
    //     <div class="text-center">
    //       <h2 class="section-heading text-uppercase">Categories</h2>
    //     </div>
    //     <div class="row text-center">
    //       <div class="col-md-4">
    //         <span class="fa-stack fa-4x">
    //           <i class="fas fa-circle fa-stack-2x text-primary"></i>
    //           <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
    //         </span>
    //         <img src="./assets/img/images.jpeg" alt="breakfast" />
    //         <h4 class="my-3">Breakfast</h4>
    //         <p class="text-muted">Start your day with a delecious Breakfast!</p>
    //       </div>
    //       <div class="col-md-4">
    //         <span class="fa-stack fa-4x">
    //           <i class="fas fa-circle fa-stack-2x text-primary"></i>
    //           <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
    //         </span>
    //         <h4 class="my-3">Lunch</h4>
    //         <p class="text-muted">
    //           Keep energized! choose your lunch meal for today.
    //         </p>
    //       </div>
    //       <div class="col-md-4">
    //         <span class="fa-stack fa-4x">
    //           <i class="fas fa-circle fa-stack-2x text-primary"></i>
    //           <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
    //         </span>
    //         <h4 class="my-3">Dinner</h4>
    //         <p class="text-muted">
    //           Light or large dinner meal? Dig in for more options.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default observer(CategoryList);
