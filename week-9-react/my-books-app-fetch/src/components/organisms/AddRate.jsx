/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function AddRate({ bookId }) {
  const [newComment, setComment] = useState({
    comment: "",
    rate: 0,
  });

  const postData = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify({ ...newComment, elementId: bookId }),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0ZDRmYjJjNmEwZDAwMTg0OTYxNjYiLCJpYXQiOjE3MDQ5MTQ2ODEsImV4cCI6MTcwNjEyNDI4MX0.-Oddul8hPzc9Q5BxNBUmPmrINgYRSZi-CBRgItUfTrE",
          },
        }
      );
      if (res.ok) {
        console.log("ok");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-2 border mt-5">
      <small>Your Rate</small>
      <Form.Control
        as="textarea"
        placeholder="Your rate"
        value={newComment.comment}
        onChange={(e) => setComment({ ...newComment, comment: e.target.value })}
      />
      <Form.Select
        aria-label="Your rate"
        value={newComment.rate}
        onChange={(e) => setComment({ ...newComment, rate: e.target.value })}
      >
        <option>Seleziona il voto</option>
        <option value="3">5</option>
        <option value="3">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
        <option value="0">0</option>
      </Form.Select>
      <Button
        variant="outline-primary"
        size="sm"
        className="mt-2"
        onClick={() => postData()}
      >
        Invia
      </Button>
    </div>
  );
}
