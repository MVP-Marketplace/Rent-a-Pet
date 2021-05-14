import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import picture from "./../../assets/img/profilePic.png";
import demo from "./../../assets/img/demoPic.png";
import "./style.css";

export default function PostCard() {
  const username = "username";
  return (
    <>
      <Container
        style={{
          border: "1px solid #E1E1E1",
          padding: "0px",
          borderRadius: "8px",
          margin: "10px 0px",
        }}
      >
        <Row style={{ margin: "0" }}>
          <Col>
            <img
              src={picture}
              alt="Profile Pic"
              style={{ borderRadius: "50%", width: "50px" }}
            />
            {username}
          </Col>
          <Col style={{ textAlign: "right" }}>Icons</Col>
        </Row>
        <Row style={{ margin: "0" }}>
          Tardar continues to inspire! Her adorable visage was relatable to so
          many and brought smiles to their faces. Thank you @ArtistOftheYear for
          your amazing artwork!
        </Row>
        <Image src={demo} alt="Demo Pic of Cats" style={{ width: "100%" }} />
        <Row style={{ margin: "0" }}>Row of Icons</Row>
        <Row style={{ margin: "0" }}>
          <Col style={{ textAlign: "right" }}>Sort icon</Col>
        </Row>
        <Row style={{ margin: "0" }}>
          <Col style={{ textAlign: "left" }}>Comment Section</Col>
        </Row>
        <Row style={{ margin: "0" }}>
          <Col style={{ textAlign: "left" }}>Input Comment Section</Col>
        </Row>
      </Container>
    </>
  );
}
