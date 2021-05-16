import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SettingNav from "./../components/SettingNav";
import AccountSetting from "./../components/AccountSetting";
import NavBar from "../components/NavBar";

export default function Setting() {
  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col lg={2} style={{ border: "1px solid red" }}>
            <SettingNav />
          </Col>
          <Col lg={6}>
            <AccountSetting />{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
}
