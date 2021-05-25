import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import Suggested from "../components/Suggested";

export default function HomeFeed() {
  let users = [];

  for (let i = 0; i < 3; i++) {
    users.push("username " + i);
  }
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={6}>
            {users ? (
              users.map((res, index) => {
                return <PostCard key={index} data={res} id={index} />;
              })
            ) : (
              <>HI</>
            )}
          </Col>
          <Col lg={3}>
            <Suggested />
          </Col>
        </Row>
      </Container>
    </>
  );
}
