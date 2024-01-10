/* eslint-disable react/prop-types */
import { Button, Card } from "react-bootstrap";
import { useState } from "react";

export default function SingleCard({ book }) {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <Card
      className="m-2"
      style={{ width: "18rem", border: clicked ? "3px solid orange" : "" }}
      onClick={() => clickHandler()}
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
