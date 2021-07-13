import React from "react";

import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const MovieCard = ({ title, description, posterURL, rating, id }) => {
  return (
    <Col md="4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={posterURL} />
        <Card.Body>
          <Card.Title>
            {title} <span>rating: {rating}</span>
          </Card.Title>
          <Card.Text>{description}</Card.Text>
          <Link to={`/video/${id}`}>Go somewhere</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieCard;
