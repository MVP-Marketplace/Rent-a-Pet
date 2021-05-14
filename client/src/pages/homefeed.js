import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import Suggested from "../components/Suggested";

export default function HomeFeed() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={6}>
            {" "}
            <PostCard />
          </Col>
          <Col lg={3}>
            <Suggested />
          </Col>
        </Row>
      </Container>
    </>
  );
}
