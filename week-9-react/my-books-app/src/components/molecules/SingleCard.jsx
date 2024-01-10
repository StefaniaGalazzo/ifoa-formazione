/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";

export default function SingleCard({ book }) {
  return (
    <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.asin}</Card.Text>
        <Button variant="primary" className="me-2">
          Save for later
        </Button>
        <Button variant="warning">Buy now!</Button>
      </Card.Body>
    </Card>
  );
}
