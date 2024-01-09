/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";

export default function CardsCustom({ category }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {category.map((book) => {
        return (
          <Card key={book.asin} className="m-2" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>{book.asin}</Card.Text>
              <Button variant="primary">Buy now!</Button>
              <Button variant="primary">Save for later</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
