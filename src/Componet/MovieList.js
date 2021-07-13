import React from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";

const MovieList = () => {
  const MovieObj = [
    {
      title: "Aaaaa",
      description: "asdasdas",
      posterURL: "https://via.placeholder.com/300.png/09f/fffC/O",
      rating: "3",
      id: "123",
    },
    {
      title: "CCC",
      description: "asdasdas",
      posterURL: "https://via.placeholder.com/300.png/09f/fffC/O",
      rating: "4.3",
      id: "456",
    },
    {
      title: "BBB",
      description: "asdasdas",
      posterURL: "https://via.placeholder.com/300.png/09f/fffC/O",
      rating: "5",
      id: "767",
    },
  ];

  const renderList = () => {
    return MovieObj.map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        description={movie.description}
        posterURL={movie.posterURL}
        rating={movie.rating}
        id={movie.id}
      />
    ));
  };

  return <Row>{renderList()}</Row>;
};

export default MovieList;
