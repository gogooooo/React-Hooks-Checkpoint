import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Componet/Main";
import VideoDetails from "./Componet/VideoDetails";
import { Navbar } from "react-bootstrap";
const App = () => {
  const MovieObj = [
    {
      title: "Lorem Ipusm 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
      posterURL: "https://via.placeholder.com/300.png/09f/fffC/O",
      rating: "3",
      id: "123",
    },
    {
      title: "Lorem Ipusm 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
      posterURL: "https://via.placeholder.com/300.png/09f/fffC/O",
      rating: "4.3",
      id: "456",
    },
    {
      title: "Lorem Ipusm 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap",
      posterURL: "https://via.placeholder.com/300.png/09f/fffC/O",
      rating: "5",
      id: "767",
    },
  ];
  return (
    <BrowserRouter>
      <Navbar bg="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route
          exact
          path="/video/:id"
          component={() => <VideoDetails obj={MovieObj} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
