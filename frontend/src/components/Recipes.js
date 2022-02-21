const RecipeItem = ({ recipe }) => {
  return (
    <div className="col-lg-4 col-sm-6 mb-4">
      <div className="portfolio-item round">
        <a
          className="portfolio-link"
          data-bs-toggle="modal"
          href="#portfolioModal2"
        >
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <h5>Description: {recipe.description}</h5>
              <h5>Calories: {recipe.calories}</h5>
              <h5>preparation time:{recipe.prepTime}</h5>
              <h5>Cook time:{recipe.cookTime}</h5>
              <h5>created by: {recipe.createdBy}</h5>
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
          <img className="image1 image2" src={recipe.image} alt="#" /> =======
        </a>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">
            <p>{recipe.name}</p>
          </div>
          <div className="portfolio-caption-subheading text-muted">
            {recipe.description}
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeItem;
