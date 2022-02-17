import { Button, Card, Col } from "react-bootstrap";
import categoryStore from "../stores/categoryStore";
//import CategoryModal from "./CategoryModal";

function CategoryCard({ category }) {
  return (
    <Col className="col-lg-4 mx-auto">
      <Card>
        <Card.Img variant="top" src={category.image} alt={category.name} />
        <Card.Body>
          <Card.Title>{category.name}</Card.Title>
          <Card.Text>{category.description}</Card.Text>
          {/* <Button className="m-1" variant="danger">
            ADD
          </Button> */}
          {/* <CategoryModal /> */}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CategoryCard;
