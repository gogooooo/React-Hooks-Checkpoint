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
    },
    {
      title: "CCC",
      description: "asdasdas",
      posterURL: "https://via.placeholder.com/300.png/09f/fffC/O",
      rating: "4.3",
    },
    {
      title: "BBB",
      description: "asdasdas",
      posterURL: "https://via.placeholder.com/300.png/09f/fffC/O",
      rating: "5",
    },
  ];


  const renderList = () =>{
      return MovieObj.map((movie)=> <MovieCard title={movie.title} description={movie.description} posterURL={movie.posterURL} rating ={movie.rating} />)
  }

  return <Row>
      {renderList()}
  </Row>;
};

export default MovieList;
