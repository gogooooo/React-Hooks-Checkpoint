import React from "react";
import { Container } from "react-bootstrap";
import MovieList from "./MovieList";
const Main = () => {
  return (
    <div>
      <Container>
        <MovieList />
      </Container>
    </div>
  );
};

export default Main;
