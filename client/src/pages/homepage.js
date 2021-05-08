import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavBar from "./../components/NavBar";
import SignUp from "./../components/SignUp";
import SunsetKitty from "./../assets/img/sunsetKitty.png";
import Lion from "./../assets/img/lion.svg";

export default function Home() {
  console.log(SignUp);
  // console.log(SunsetKitty);
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row
          style={{
            backgroundImage: `url(${SunsetKitty})`,
            height: "100vh",
            backgroundPosition: "left, bottom",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <span style={{ fontSize: 24, color: "red" }}>
            Will need to add styling
          </span>
          <Col>Raise Up To $2,000 a Month With Your Pet! </Col>
          <Col>
            <SignUp />
          </Col>
        </Row>
        <Row
          style={{
            height: "100vh",
          }}
        >
          {" "}
          <span style={{ fontSize: 24, color: "red" }}>
            Will need to add styling
          </span>
        </Row>
        <Row
          style={{
            backgroundImage: `url(${Lion})`,
            height: "100vh",

            backgroundSize: "cover",
            backgroundPositionX: "right",
            backgroundPositionY: "bottom",
          }}
        >
          {" "}
          <span style={{ fontSize: 24, color: "red" }}>
            Will need to add styling
          </span>
        </Row>
        <Row
          style={{
            background: "#F9F9F0",
            height: "100vh",
          }}
        >
          {" "}
          <span style={{ fontSize: 24, color: "red" }}>
            Will need to add styling
          </span>
        </Row>
      </Container>
    </>
  );
}
