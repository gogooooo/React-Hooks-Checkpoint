import React from "react";
import { Card,Button,Col } from "react-bootstrap";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Col md="4">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title} <span>rating: {rating}</span></Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card></Col>
  );
};

export default MovieCard;
