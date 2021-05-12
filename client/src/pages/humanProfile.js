import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Navbar from "./../components/NavBar";
import HumanNav from "./../components/HumanNav";
import ProfilePic from "./../assets/img/profilePic.png";

export default function HumanProfile() {
  const name = "First and Last Name";
  const username = "@" + `username`;
  const website = "Website";
  const description = "Description";
  return (
    <>
      <Navbar />
      <div style={{ background: "grey", height: "50vh" }}>
        Add Background Image
      </div>
      <Container>
        <Row
          className="justify-content-md-center"
          style={{ marginTop: "-50px" }}
        >
          <Col lg={2} style={{ background: "blue" }}>
            <Image
              src={ProfilePic}
              alt="Profile Picture"
              roundedCircle
              style={{ width: "100%" }}
            ></Image>
          </Col>
          <Col lg={6} style={{ background: "green" }}>
            <div>{name}</div>
            <div>{username}</div>
            <div>{website}</div>
          </Col>
          <Col lg={2} style={{ background: "aqua" }}>
            Add some icons
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg={10} style={{ background: "grey" }}>
            <div style={{ borderBottom: "2px solid black", padding: "5px" }}>
              About
            </div>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
      <div style={{ background: "#EFEFF5", height: "300px", width: "100%" }}>
        <Container>
          <Row className="justify-content-md-center">
            <Col
              lg="10"
              style={{
                background: "pink",
                borderBottom: "2px solid black",
              }}
            >
              My Critter
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="10" style={{ background: "red" }}>
              Critter card
            </Col>
          </Row>
        </Container>
      </div>{" "}
      <div style={{ height: "300px" }}>
        <Container>
          <Row className="justify-content-md-center">
            <HumanNav />
          </Row>
          <Row className="justify-content-md-center">
            <Col lg="10" style={{ background: "red" }}>
              Post Cards Components
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
