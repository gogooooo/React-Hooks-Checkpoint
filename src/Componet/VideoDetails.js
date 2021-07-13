import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
const VideoDetails = ({ obj }) => {
  let { id } = useParams();
  const movieobj = obj.find((item) => item.id === id);
  console.log(movieobj);
  return (
    <Container>
      <img src={movieobj.posterURL} alt="poster " />
      <p className="text-muted">{movieobj.title}</p>
      <p className="text-muted">{movieobj.description}</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </Container>
  );
};

export default VideoDetails;
