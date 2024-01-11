/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";

export default function SingleCard({ book, clicked, handler }) {
  const clickedStyle = {
    border: clicked && "3px solid orange",
    boxShadow: clicked && "0 0 21px 5px #0008",
    transform: clicked && "scale(1.1)",
    position: clicked && "relative",
    zIndex: clicked && "14",
  };
  return (
    <Card
      style={{ width: "18rem", height: "100%", ...clickedStyle }}
      onClick={handler}
    >
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
