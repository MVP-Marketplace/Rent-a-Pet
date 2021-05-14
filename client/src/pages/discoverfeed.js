import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./../components/NavBar";
import Carousel from "./../components/MultiCardCarousel";

export default function HomeFeed() {
  return (
    <>
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    </>
  );
}
