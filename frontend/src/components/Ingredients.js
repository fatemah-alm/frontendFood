const IngredientItem = ({ ingredient }) => {
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
              <i className="fas fa-plus fa-3x"></i>
            </div>
          </div>
        </a>
        <div className="portfolio-caption">
          <div className="portfolio-caption-heading">
            <p>{ingredient.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IngredientItem;
