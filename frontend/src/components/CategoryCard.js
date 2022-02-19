import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//import CategoryModal from "./CategoryModal";

function CategoryCard({ category }) {
  return (
    <>
      <Col className="col-lg-4 mx-auto">
        <Card>
          <Card.Img variant="top" src={category.image} alt={category.name} />
          <Card.Body>
            <Link to={`/category/${category.name}`}>
              <Card.Title>{category.name}</Card.Title>
            </Link>
            {/* <Card.Text>{category.description}</Card.Text> */}
            {/* <Button className="m-1" variant="danger">
            ADD
          </Button> */}
            {/* <CategoryModal /> */}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default CategoryCard;
