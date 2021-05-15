import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./../components/NavBar";
import PostCard from "./../components/PostCard";

export default function FeedPage() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={6}>
            {" "}
            <PostCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}
